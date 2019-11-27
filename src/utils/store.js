import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";


const initialState = {};
export const history = createHistory();
export const rootReducer = {
  router: connectRouter(history)
};

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

export const reducer = combineReducers({ ...rootReducer });

const middlewares = [
  thunk,
  routerMiddleware(history)
];

const enhancers = [
  applyMiddleware(...middlewares),
  devTools()
];


export const store = createStore(
  reducer,
  initialState,
  compose(...enhancers)
);
store.asyncReducers = { ...rootReducer };


export const withStore = fn => fn(store);


export default store;
