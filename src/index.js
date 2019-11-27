import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './utils/store';
import App from './containers/App';


const rootNode = document.getElementById('root');
const ReactApp = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(ReactApp, rootNode);
