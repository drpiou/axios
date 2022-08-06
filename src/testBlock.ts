import {mapValues, uniq, uniqueId, values} from "lodash";
import {AxiosConfig, AxiosOptions, prepareAxios} from "../lib";

export type Result = {
  code?: number;
  isAxiosError?: boolean;
  isCancel?: boolean;
  isConnexionError?: boolean;
  isConnexionTimeoutError?: boolean;
  isError?: boolean;
  isNetworkError?: boolean;
};

export function testBlock(app: HTMLDivElement, title: string, config: AxiosConfig, options: AxiosOptions, expect: Result) {
  console.log('__DEV__', { app, title, config, options, expect })

  // Create card
  const card = document.createElement('div');

  card.className = 'card';

  app.appendChild(card)

  // Create card button
  const button = document.createElement('button');

  button.id = uniqueId();
  button.innerHTML = title;

  card.appendChild(button)

  // Create card result
  const result = document.createElement('p');

  result.className = 'result';

  card.appendChild(result)

  // Add button action
  button.addEventListener('click', async () => {
    button.innerHTML = 'loading...'

    const request = prepareAxios(config, options);

    request.start().then((response) => {
      const expectedValues = mapValues(expect, (value, key) => {
        if (key === 'code') {
          return String(response.response?.status === value);
        }

        return String(response[key as never] === value);
      });

      const expected = uniq(values(expectedValues)).indexOf('false') === -1;

      console.log('__DEV__', { response, expectedValues, expected })

      button.innerHTML = title

      result.innerHTML = `
        <div>
          <span>status:</span>
          <span>${response.isError ? 'error' : 'success'}</span>
        </div>
        <div>
          <span>code:</span>
          <span>${response.response?.status}</span>
        </div>
        <div>
          <span>isError:</span>
          <span>${response.isError}</span>
        </div>

        ${response.isError ? `
          <div>
            <span>isAxiosError:</span>
            <span>${response.isAxiosError}</span>
          </div>
          <div>
            <span>isCancel:</span>
            <span>${response.isCancel}</span>
          </div>
          <div>
            <span>isConnexionError:</span>
            <span>${response.isConnexionError}</span>
          </div>
          <div>
            <span>isConnexionTimeoutError:</span>
            <span>${response.isConnexionTimeoutError}</span>
          </div>
          <div>
            <span>isNetworkError:</span>
            <span>${response.isNetworkError}</span>
          </div>
        ` : ''}

        <div>
          <span>data:</span>
          <span>${JSON.stringify(response.data)}</span>
        </div>
        <div>
          <span>result:</span>
          <span>${expected ? 'success' : 'error'}</span>
        </div>
      `;
    });

    if (options.testCancel) {
      request.abort();
    }
  })
}
