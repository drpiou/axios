import { Debug } from '@drpiou/ts-utils';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import filter from 'lodash/filter';
import get from 'lodash/get';
import trimEnd from 'lodash/trimEnd';
import trimStart from 'lodash/trimStart';

export class AxiosException<T = any, D = any> extends AxiosError<T, D> {
  __CANCEL__?: boolean;
  __NETWORK_ERROR__?: boolean;
}

export type AxiosConfig<CD = any> = AxiosRequestConfig<CD>;

export type AxiosLog = 'verbose' | 'info' | 'success' | 'error' | 'response' | 'none';

export type AxiosOptions<SD = any, ED = any> = {
  abort?: boolean;
  isNetworkConnected?: () => Promise<boolean>;
  log?: AxiosLog;
  test?: boolean;
  testCancel?: boolean;
  testData?: SD | ED;
  testNetworkError?: boolean;
  testSleep?: number;
  testStatus?: number;
};

export type AxiosResponseBase = {
  elapsedTime: number;
};

export type AxiosResponseSuccess<SD = any, CD = any> = AxiosResponseBase & {
  data: SD;
  isError: false;
  response: AxiosResponse<SD, CD>;
};

export type AxiosResponseError<ED = any, CD = any> = AxiosResponseBase & {
  data?: ED;
  error: AxiosError<ED, CD> | Error;
  isAxiosError: boolean;
  isError: true;
  isCancel: boolean;
  isNetworkError?: boolean;
  response?: AxiosResponse<ED, CD>;
};

export type AxiosResponseRequest<SD = any, ED = any, CD = any> = AxiosResponseSuccess<SD, CD> | AxiosResponseError<ED, CD>;

export type AxiosRequestStart<SD = any, ED = any, CD = any> = (
  options?: AxiosOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD>>;

export type AxiosRequestAbort = () => void;

export type AxiosRequest<SD = any, ED = any, CD = any> = {
  start: AxiosRequestStart<SD, ED, CD>;
  abort: AxiosRequestAbort;
};

export type AxiosApiRequest<CD = any, SD = any, ED = any> = CD extends undefined
  ? (data?: null, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>
  : (data: CD, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>;

type AxiosAbortSignal = {
  current: () => void;
};

type AxiosStartOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
  testSignal: AxiosAbortSignal;
};

const DEFAULT_LOG: AxiosLog = 'none';

const DEFAULT_STATUS = 200;

const DEFAULT_OPTIONS: AxiosOptions = {
  abort: false,
  log: DEFAULT_LOG,
  test: false,
  testCancel: false,
  testNetworkError: false,
  testSleep: 0,
  testStatus: DEFAULT_STATUS,
};

export const debug = new Debug();

export const prepareAxios = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
): AxiosRequest<SD, ED, CD> => {
  const controller = new AbortController();

  const axiosConfig: AxiosConfig<CD> = {
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      ...get(config, 'headers'),
    },
    signal: controller.signal,
  };

  const testSignal: AxiosAbortSignal = {
    current: () => undefined,
  };

  const prepareOptions = { ...DEFAULT_OPTIONS, ...options, testSignal } as AxiosStartOptions<SD, ED>;

  if (['verbose'].includes(prepareOptions.log || DEFAULT_LOG)) {
    debug.log('axios:prepare', formatFullUrl(axiosConfig), { config: axiosConfig });
  }

  const start: AxiosRequestStart<SD, ED, CD> = (overrideOptions) => {
    const startOptions: AxiosStartOptions<SD, ED> = { ...prepareOptions, ...overrideOptions };

    const request = begin(axiosConfig, startOptions);

    if (startOptions.abort) {
      controller.abort();
    }

    return request;
  };

  return {
    start,
    abort: (): void => {
      testSignal.current();
      controller.abort();
    },
  };
};

const begin = async <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options: AxiosStartOptions<SD, ED>,
): Promise<AxiosResponseRequest<SD, ED, CD>> => {
  const startTime = Date.now();

  if (['verbose', 'info'].includes(options.log || DEFAULT_LOG)) {
    debug.log('axios:start', formatFullUrl(config), { config, startTime });
  }

  let response;

  if (options.test) {
    response = {
      data: options.testData,
      status: options.testStatus ?? DEFAULT_STATUS,
      statusText: 'test',
      headers: {},
      config,
    };

    let testCancelled = false;

    if (options.testSleep) {
      await new Promise<void>((resolve) => {
        const resolveThis = (): void => {
          options.testSignal.current = (): void => undefined;

          resolve();
        };

        const timeout = setTimeout(resolveThis, options.testSleep);

        options.testSignal.current = (): void => {
          testCancelled = true;

          clearTimeout(timeout);

          resolveThis();
        };
      });
    }

    const error = new AxiosException('Test', 'TEST', config, null, response as AxiosResponse<ED, CD>);

    if (options.testCancel || testCancelled) {
      error.__CANCEL__ = true;

      return parseError(error, config, options, startTime);
    } else if (options.testNetworkError) {
      error.__NETWORK_ERROR__ = true;

      return parseError(error, config, options, startTime);
    } else if (response.status < 200 || response.status >= 300) {
      return parseError(error, config, options, startTime);
    }
  } else {
    try {
      response = await axios(config);
    } catch (e) {
      return parseError(e as AxiosException<ED, CD> | Error, config, options, startTime);
    }
  }

  const endTime = Date.now();

  const successResponse: AxiosResponseSuccess<SD, CD> = {
    data: response.data,
    elapsedTime: endTime - startTime,
    isError: false,
    response,
  };

  if (['verbose', 'info', 'success', 'response'].includes(options.log || DEFAULT_LOG)) {
    debug.info('axios:success', formatFullUrl(config), { response: successResponse, endTime });
  }

  return successResponse;
};

const parseError = async <ED = any, CD = any>(
  error: AxiosException<ED, CD> | Error,
  config: AxiosConfig<CD>,
  options: AxiosOptions<any, ED>,
  startTime: number,
): Promise<AxiosResponseError<ED, CD>> => {
  const networkConnected = await options.isNetworkConnected?.();

  const isAxiosError = 'response' in error;

  const endTime = Date.now();

  const errorResponse: AxiosResponseError<ED, CD> = {
    data: isAxiosError ? error.response?.data : undefined,
    elapsedTime: endTime - startTime,
    error,
    isAxiosError,
    isCancel: axios.isCancel(error),
    isError: true,
    isNetworkError: isAxiosError ? error.__NETWORK_ERROR__ || !networkConnected : undefined,
    response: isAxiosError ? error.response : undefined,
  };

  if (['verbose', 'info', 'error', 'response'].includes(options.log || DEFAULT_LOG)) {
    debug.error('axios:error', formatFullUrl(config), { response: errorResponse, endTime });
  }

  return errorResponse;
};

const formatFullUrl = <CD = any>(config: AxiosConfig<CD>): string | undefined => {
  return filter([trimEnd(config.baseURL, '/'), trimStart(config.url, '/')]).join('/') || undefined;
};

const data = prepareAxios({ url: '', data: { test: 'me' } });

void data.start().then((response) => {
  if (!response.isError) {
    console.log('__DEV__', { test: response.data.retour });
  }
});
