# `@drpiou/axios`

![Licence](https://img.shields.io/github/license/drpiou/axios)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/axios)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/axios` package wraps the `axios` package.

> - make axios request as usual.
> - test the requests before the api implementation as it will be.
> - cancel axios requests.
> - log axios responses.
> - written in TypeScript.

<!--ts-->

- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Installation

```shell
yarn add @drpiou/axios
```

### Peer Dependencies

```shell
yarn add axios@^0.27.2
```

## Example

```typescript
import { prepareAxios } from '@drpiou/axios';

const request = prepareAxios({
  baseURL: 'https://api.domain.com',
  url: 'test',
});

const response = await request.start();

// or
//
// void request.start().then((response) => {});
//
// setTimeout(request.abort, 1000);
```

## Documentation

```typescript
export type prepareAxios = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
) => AxiosRequest<SD, ED, CD>;

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
```
