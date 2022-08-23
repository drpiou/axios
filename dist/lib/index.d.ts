import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export declare class AxiosException<T = any, D = any> extends AxiosError<T, D> {
    __CANCEL__?: boolean;
    __NETWORK_ERROR__?: boolean;
}
export declare type AxiosConfig<CD = any> = AxiosRequestConfig<CD>;
export declare type AxiosLog = 'verbose' | 'info' | 'success' | 'error' | 'response' | 'none';
export declare type AxiosOptions<SD = any, ED = any> = {
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
export declare type AxiosRequest<SD = any, ED = any, CD = any> = {
    start: AxiosRequestStart<SD, ED, CD>;
    abort: AxiosRequestAbort;
};
export declare type AxiosRequestStart<SD = any, ED = any, CD = any> = () => Promise<AxiosRequestResponse<SD, ED, CD>>;
export declare type AxiosRequestAbort = () => void;
export declare type AxiosRequestResponse<SD = any, ED = any, CD = any> = AxiosRequestResponseSuccess<SD, CD> | AxiosRequestResponseError<ED, CD>;
export declare type AxiosRequestResponseSuccess<SD = any, CD = any> = AxiosResponseBase & {
    data: SD;
    isError: false;
    response: AxiosResponse<SD, CD>;
};
export declare type AxiosRequestResponseError<ED = any, CD = any> = AxiosResponseBase & {
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
declare type AxiosResponseBase = {
    elapsedTime: number;
};
export declare const prepareAxios: <SD = any, ED = any, CD = any>(config: AxiosConfig<CD>, options?: AxiosOptions<SD, ED> | undefined) => AxiosRequest<SD, ED, CD>;
export declare const prepareAxiosTest: <SD = any, ED = any, CD = any>(config: AxiosConfig<CD>, options: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>;
export declare const prepareAxiosReal: <SD = any, ED = any, CD = any>(config: AxiosConfig<CD>, options: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>;
export {};
