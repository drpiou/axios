/* eslint-disable @typescript-eslint/no-explicit-any */

import { Debug } from '@drpiou/ts-utils';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import filter from 'lodash/filter';
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
  axios?: typeof axios;
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
  isConnexionError: boolean;
  isConnexionTimeoutError: boolean;
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

export type AxiosRequestData<CD = any, SD = any, ED = any> = (
  data: CD,
  options?: AxiosOptions<SD, ED>,
) => AxiosRequest<SD, ED, CD>;

export type AxiosRequestDataOptional<CD = any, SD = any, ED = any> = (
  data?: CD | null,
  options?: AxiosOptions<SD, ED>,
) => AxiosRequest<SD, ED, CD>;

export type AxiosRequestDataVoid<SD = any, ED = any> = (
  data?: null,
  options?: AxiosOptions<SD, ED>,
) => AxiosRequest<SD, ED, never>;

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
  axios,
  log: DEFAULT_LOG,
  test: false,
  testCancel: false,
  testNetworkError: false,
  testSleep: 0,
  testStatus: DEFAULT_STATUS,
};

const debug = new Debug();

export const prepareAxios = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
): AxiosRequest<SD, ED, CD> => {
  const prepareOptions = { ...DEFAULT_OPTIONS, ...options };

  if (['verbose'].includes(prepareOptions.log || DEFAULT_LOG)) {
    debug.log(formatSign('axios:prepare', prepareOptions), formatFullUrl(config), { config, options: prepareOptions });
  }

  if (prepareOptions.test) {
    return prepareAxiosTest(config, prepareOptions);
  } else {
    return prepareAxiosReal(config, prepareOptions);
  }
};

export const prepareAxiosTest = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
): AxiosRequest<SD, ED, CD> => {
  const testSignal: AxiosAbortSignal = {
    current: () => undefined,
  };

  const start: AxiosRequestStart<SD, ED, CD> = (overrideOptions) => {
    const startOptions: AxiosStartOptions<SD, ED> = { ...options, ...overrideOptions, testSignal };

    const request = begin(config, startOptions);

    if (startOptions.abort) {
      testSignal.current();
    }

    return request;
  };

  return {
    start,
    abort: (): void => {
      testSignal.current();
    },
  };
};

export const prepareAxiosReal = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
): AxiosRequest<SD, ED, CD> => {
  const controller = new AbortController();

  const start: AxiosRequestStart<SD, ED, CD> = (overrideOptions) => {
    const startOptions: AxiosOptions<SD, ED> = { ...options, ...overrideOptions };

    const request = begin({ ...config, signal: controller.signal }, startOptions);

    if (startOptions.abort) {
      controller.abort();
    }

    return request;
  };

  return {
    start,
    abort: (): void => {
      controller.abort();
    },
  };
};

const begin = async <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options: AxiosStartOptions<SD, ED> | AxiosOptions<SD, ED>,
): Promise<AxiosResponseRequest<SD, ED, CD>> => {
  const startTime = Date.now();

  if (['verbose', 'info'].includes(options.log || DEFAULT_LOG)) {
    debug.log(formatSign('axios:start', options), formatFullUrl(config), { config, options, startTime });
  }

  if (options.test) {
    return beginTest(config, options as AxiosStartOptions<SD, ED>);
  } else {
    return beginReal(config, options);
  }
};

const beginTest = async <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options: AxiosStartOptions<SD, ED>,
): Promise<AxiosResponseRequest<SD, ED, CD>> => {
  const startTime = Date.now();

  const response: AxiosResponse<SD | ED | undefined, CD> = {
    data: options.testData,
    status: options.testStatus ?? DEFAULT_STATUS,
    statusText: 'test',
    headers: {},
    config,
  };

  let testCancelled = false;

  if (options.testSleep && options.testCancel !== true) {
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

  return parseSuccess(response as AxiosResponse<SD, CD>, config, options, startTime);
};

const beginReal = async <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options: AxiosOptions<SD, ED>,
): Promise<AxiosResponseRequest<SD, ED, CD>> => {
  const startTime = Date.now();

  let response;

  try {
    response = await (options.axios ?? axios)(config);
  } catch (e) {
    return parseError(e as AxiosException<ED, CD> | Error, config, options, startTime);
  }

  return parseSuccess(response, config, options, startTime);
};

const parseSuccess = <SD = any, ED = any, CD = any>(
  response: AxiosResponse<SD, CD>,
  config: AxiosConfig<CD>,
  options: AxiosOptions<SD, ED>,
  startTime: number,
): AxiosResponseSuccess<SD, CD> => {
  const endTime = Date.now();

  const successResponse: AxiosResponseSuccess<SD, CD> = {
    data: response.data,
    elapsedTime: endTime - startTime,
    isError: false,
    response,
  };

  if (['verbose', 'info', 'success', 'response'].includes(options.log || DEFAULT_LOG)) {
    debug.info(formatSign('axios:success', options), formatFullUrl(config), { response: successResponse, options, endTime });
  }

  return successResponse;
};

const parseError = async <ED = any, CD = any>(
  error: AxiosException<ED, CD> | Error,
  config: AxiosConfig<CD>,
  options: AxiosOptions<any, ED>,
  startTime: number,
): Promise<AxiosResponseError<ED, CD>> => {
  const endTime = Date.now();

  const hasCode = 'code' in error;
  const hasResponse = 'response' in error;

  const isCancelError = (options.axios ?? axios).isCancel(error);
  const isConnexionError = hasCode && error.code === 'ERR_NETWORK';
  const isConnexionTimeoutError = hasCode && error.code === 'ECONNABORTED';

  const isAxiosError = hasResponse || isCancelError || isConnexionError || isConnexionTimeoutError;

  const isNetworkConnected = options.test
    ? hasResponse && error.__NETWORK_ERROR__ !== undefined
      ? !error.__NETWORK_ERROR__
      : undefined
    : await options.isNetworkConnected?.();

  const errorResponse: AxiosResponseError<ED, CD> = {
    data: hasResponse ? error.response?.data : undefined,
    elapsedTime: endTime - startTime,
    error,
    isAxiosError,
    isCancel: isCancelError,
    isError: true,
    isConnexionError: isConnexionError || isConnexionTimeoutError,
    isConnexionTimeoutError,
    isNetworkError: isNetworkConnected === undefined ? undefined : !isNetworkConnected,
    response: hasResponse ? error.response : undefined,
  };

  if (['verbose', 'info', 'error', 'response'].includes(options.log || DEFAULT_LOG)) {
    if (hasResponse) {
      debug.error(formatSign('axios:error', options), formatFullUrl(config), { response: errorResponse, options, endTime });
    } else {
      debug.error(formatSign('axios:error', options), formatFullUrl(config), { config, options, endTime });
    }
  }

  return errorResponse;
};

const formatSign = (text: string, options: AxiosOptions): string => {
  return `${text}${options.test ? ':test' : ''}`;
};

const formatFullUrl = (config: AxiosConfig): string | undefined => {
  return filter([trimEnd(config.baseURL, '/'), trimStart(config.url, '/')]).join('/') || undefined;
};
