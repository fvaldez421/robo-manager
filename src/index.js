import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from "./utils/store";


const rootNode = document.getElementById('root');
const ReactApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReactApp, rootNode);
