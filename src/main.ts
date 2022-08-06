import './style.css'
import {testBlock} from "./testBlock";

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
  testBlock(app, 'success-api', configApi, {}, defaultResult)

  testBlock(app, 'success-test', configTest, {
    ...optionsTest,
    testStatus: 200
  }, defaultResult)

  testBlock(app, 'abort-api', configApi, {
    testCancel: true,
  }, {
    ...errorResult,
    isCancel: true,
  })

  testBlock(app, 'abort-test', configTest, {
    ...optionsTest,
    testStatus: 200,
    testCancel: true,
    testSleep: 5000
  }, {
    ...errorResult,
    isCancel: true,
  })

  testBlock(app, 'error-test', configTest, {
    ...optionsTest,
    testStatus: 404
  }, {
    ...errorResult,
    code: 404,
  })

  testBlock(app, 'network-error-test', configTest, {
    ...optionsTest,
    testStatus: 200,
    testNetworkError: true,
    testSleep: 1000
  }, {
    ...errorResult,
    isNetworkError: true,
  })
}
