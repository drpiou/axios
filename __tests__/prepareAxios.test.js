'use strict';

const { prepareAxios } = require('..');

test('@drpiou/ts-utils:prepareAxios', async () => {
  const request = prepareAxios(
    {
      baseURL: 'https://my.domain',
      url: 'test',
    },
    {
      test: true,
      testData: {
        a: 1,
        b: 2,
      },
      testStatus: 200,
    },
  );

  expect(typeof request).toBe('object');
  expect(typeof request.start).toBe('function');
  expect(typeof request.abort).toBe('function');

  const success = await request.start();

  expect(typeof success.data).toBe('object');
  expect(typeof success.data.a).toBe('number');
  expect(typeof success.data.b).toBe('number');
  expect(typeof success.isError).toBe('boolean');
  expect(typeof success.response).toBe('object');

  expect(success.data.a).toBe(1);
  expect(success.data.b).toBe(2);
  expect(success.isError).toBe(false);

  const error = await request.start({
    testStatus: 400,
  });

  expect(typeof error.isAxiosError).toBe('boolean');
  expect(typeof error.isError).toBe('boolean');

  expect(error.isAxiosError).toBe(true);
  expect(error.isError).toBe(true);

  const networkError = await request.start({
    testStatus: 400,
    testNetworkError: true,
  });

  expect(typeof networkError.isAxiosError).toBe('boolean');
  expect(typeof networkError.isError).toBe('boolean');
  expect(typeof networkError.isNetworkError).toBe('boolean');

  expect(networkError.isAxiosError).toBe(true);
  expect(networkError.isError).toBe(true);
  expect(networkError.isNetworkError).toBe(true);
});
