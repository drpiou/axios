# `@drpiou/axios`

![GitHub](https://img.shields.io/github/license/drpiou/axios)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/axios)
![Jest tests](https://img.shields.io/badge/passed%20test-1-green)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)
![GitHub all releases](https://img.shields.io/github/downloads/drpiou/axios/total)

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
```

## Documentation

```typescript
type prepareAxios = <SD = unknown, ED = unknown, CD = unknown>(
  config: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
) => AxiosRequest<SD, ED, CD>;

type AxiosConfig<CD = unknown> = AxiosRequestConfig<CD>;

type AxiosLog = 'verbose' | 'info' | 'success' | 'error' | 'response' | 'none';

type AxiosOptions<SD = unknown, ED = unknown> = {
  abort?: boolean; // Default: false
  isNetworkConnected?: () => Promise<boolean>;
  log?: AxiosLog; // Default: 'none'
  test?: boolean; // Default: false
  testCancel?: boolean; // Default: false
  testData?: SD | ED; // Default: undefined
  testNetworkError?: boolean; // Default: false
  testSleep?: number; // Default: 0 = no sleep
  testStatus?: number; // Default: 200
};

type AxiosResponseBase = {
  elapsedTime: number;
};

type AxiosResponseSuccess<SD = unknown, CD = unknown> = AxiosResponseBase & {
  data: SD;
  isError: false;
  response: AxiosResponse<SD, CD>;
};

type AxiosResponseError<ED = unknown, CD = unknown> = AxiosResponseBase & {
  data?: ED;
  error: AxiosError<ED, CD> | Error;
  isAxiosError: boolean;
  isError: true;
  isCancel: boolean;
  isNetworkError?: boolean;
  response?: AxiosResponse<ED, CD>;
};

type AxiosResponseRequest<SD = unknown, ED = unknown, CD = unknown> =
  | AxiosResponseSuccess<SD, CD>
  | AxiosResponseError<ED, CD>;

type AxiosRequestStart<SD = unknown, ED = unknown, CD = unknown> = (
  options?: AxiosOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD>>;

type AxiosRequestAbort = () => void;

type AxiosRequest<SD = unknown, ED = unknown, CD = unknown> = {
  start: AxiosRequestStart<SD, ED, CD>;
  abort: AxiosRequestAbort;
};

type AxiosApiRequest<CD = any, SD = any, ED = any> = CD extends undefined
  ? (data?: null, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>
  : (data: CD, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>;
```
