import { Debug } from '@drpiou/ts-utils';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export declare class AxiosException<T = any, D = any> extends AxiosError<T, D> {
    __CANCEL__?: boolean;
    __NETWORK_ERROR__?: boolean;
}
export declare type AxiosConfig<CD = any> = AxiosRequestConfig<CD>;
export declare type AxiosLog = 'verbose' | 'info' | 'success' | 'error' | 'response' | 'none';
export declare type AxiosOptions<SD = any, ED = any> = {
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
export declare type AxiosResponseBase = {
    elapsedTime: number;
};
export declare type AxiosResponseSuccess<SD = any, CD = any> = AxiosResponseBase & {
    data: SD;
    isError: false;
    response: AxiosResponse<SD, CD>;
};
export declare type AxiosResponseError<ED = any, CD = any> = AxiosResponseBase & {
    data?: ED;
    error: AxiosError<ED, CD> | Error;
    isAxiosError: boolean;
    isError: true;
    isCancel: boolean;
    isNetworkError?: boolean;
    response?: AxiosResponse<ED, CD>;
};
export declare type AxiosResponseRequest<SD = any, ED = any, CD = any> = AxiosResponseSuccess<SD, CD> | AxiosResponseError<ED, CD>;
export declare type AxiosRequestStart<SD = any, ED = any, CD = any> = (options?: AxiosOptions<SD, ED>) => Promise<AxiosResponseRequest<SD, ED, CD>>;
export declare type AxiosRequestAbort = () => void;
export declare type AxiosRequest<SD = any, ED = any, CD = any> = {
    start: AxiosRequestStart<SD, ED, CD>;
    abort: AxiosRequestAbort;
};
export declare type AxiosApiRequest<CD = any, SD = any, ED = any> = CD extends undefined ? (data?: null, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD> : (data: CD, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>;
export declare const debug: Debug;
export declare const prepareAxios: <SD = any, ED = any, CD = any>(config: AxiosConfig<CD>, options?: AxiosOptions<SD, ED> | undefined) => AxiosRequest<SD, ED, CD>;