import {prepareAxios} from "../../lib";

const request = prepareAxios({
  baseURL: 'https://api.agify.io',
  params: {
    name: 'test',
  },
});

export function testAbortApi(element: HTMLButtonElement) {
  const handleClick = async () => {
    element.innerHTML = `loading...`

    request.start().then((response) => {
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
    });

    request.abort();

    // setTimeout(() => request.abort(), 1000);
  }

  element.addEventListener('click', () => handleClick())
}
