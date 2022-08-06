import {prepareAxios} from "../../lib";

const request = prepareAxios({
  baseURL: 'https://i.dont.exists',
}, {
  test: true,
  testStatus: 404,
  testData: {
    foo: 'boo',
  },
});

export function testErrorTest(element: HTMLButtonElement) {
  const handleClick = async () => {
    element.innerHTML = `loading...`

    const response = await request.start();

    element.innerHTML = `response is: ${
      response.isError ? `error; error is ${
        JSON.stringify({
          isAxiosError: response.isAxiosError,
          isCancel: response.isCancel,
          isConnexionError: response.isConnexionError,
          isConnexionTimeoutError: response.isConnexionTimeoutError,
          isNetworkError: response.isNetworkError,
        })
      }` : `success`}; code is ${response.response?.status}; data is ${JSON.stringify(response.data)}`
  }

  element.addEventListener('click', () => handleClick())
}
