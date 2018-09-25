import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { store } from "./store";

const render = function () {
    ReactDOM.render(<App />, document.getElementById('root'));
}

render();

store.subscribe(render);
registerServiceWorker();
