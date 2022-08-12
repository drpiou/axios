import { AxiosConfig, AxiosOptions } from '../lib';
import './style.css';
import { test } from './tests/test';

const config: AxiosConfig = {
  baseURL: 'https://api.agify.io',
  params: {
    name: 'test',
  },
};

const optionsTest: AxiosOptions = {
  test: true,
  testData: {
    foo: 'boo',
  },
};

const defaultResult = {
  code: 200,
  isError: false,
};

const errorResult = {
  isAxiosError: true,
  isCancel: false,
  isConnexionError: false,
  isConnexionTimeoutError: false,
  isError: true,
};

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  test(app, 'success-api', config, {}, defaultResult);

  test(app, 'success-test', config, { ...optionsTest, testStatus: 200 }, defaultResult);

  test(app, 'abort-api', config, { testCancel: true }, { ...errorResult, isCancel: true });

  test(
    app,
    'abort-test',
    config,
    { ...optionsTest, testStatus: 200, testCancel: true, testSleep: 5000 },
    { ...errorResult, isCancel: true },
  );

  test(app, 'error-test', config, { ...optionsTest, testStatus: 404 }, { ...errorResult, code: 404 });

  test(
    app,
    'network-error-test',
    config,
    { ...optionsTest, testStatus: 200, testNetworkError: true, testSleep: 1000 },
    { ...errorResult, isNetworkError: true },
  );
}
