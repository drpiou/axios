import './style.css';
import { test } from './tests/test';

const configApi = {
  baseURL: 'https://api.agify.io',
  params: {
    name: 'test',
  },
};

const configTest = {
  baseURL: 'https://i.dont.exists',
};

const optionsTest = {
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
  test(app, 'success-api', configApi, {}, defaultResult);

  test(app, 'success-test', configTest, { ...optionsTest, testStatus: 200 }, defaultResult);

  test(app, 'abort-api', configApi, { testCancel: true }, { ...errorResult, isCancel: true });

  test(
    app,
    'abort-test',
    configTest,
    { ...optionsTest, testStatus: 200, testCancel: true, testSleep: 5000 },
    { ...errorResult, isCancel: true },
  );

  test(app, 'error-test', configTest, { ...optionsTest, testStatus: 404 }, { ...errorResult, code: 404 });

  test(
    app,
    'network-error-test',
    configTest,
    { ...optionsTest, testStatus: 200, testNetworkError: true, testSleep: 1000 },
    { ...errorResult, isNetworkError: true },
  );
}
