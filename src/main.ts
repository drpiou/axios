import './style.css'
import {testAbortApi} from "./tests/abortApi";
import {testAbortTest} from "./tests/abortTest";
import {testCancelTest} from "./tests/cancelTest";
import {testErrorTest} from "./tests/errorTest";
import {testNetworkErrorTest} from "./tests/networkErrorTest";
import {testSuccessApi} from "./tests/successApi";
import {testSuccessTest} from "./tests/successTest";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="success-api" type="button">success-api</button>
    </div>
    <div class="card">
      <button id="success-test" type="button">success-test</button>
    </div>
    <div class="card">
      <button id="error-test" type="button">error-test</button>
    </div>
    <div class="card">
      <button id="cancel-test" type="button">cancel-test</button>
    </div>
    <div class="card">
      <button id="network-error-test" type="button">network-error-test</button>
    </div>
    <div class="card">
      <button id="abort-api" type="button">abort-api</button>
    </div>
    <div class="card">
      <button id="abort-test" type="button">abort-test</button>
    </div>
  </div>
`

testAbortApi(document.querySelector<HTMLButtonElement>('#abort-api')!)
testAbortTest(document.querySelector<HTMLButtonElement>('#abort-test')!)
testCancelTest(document.querySelector<HTMLButtonElement>('#cancel-test')!)
testErrorTest(document.querySelector<HTMLButtonElement>('#error-test')!)
testNetworkErrorTest(document.querySelector<HTMLButtonElement>('#network-error-test')!)
testSuccessApi(document.querySelector<HTMLButtonElement>('#success-api')!)
testSuccessTest(document.querySelector<HTMLButtonElement>('#success-test')!)
