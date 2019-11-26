import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";


const initialState = {};

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

const middleware = compose(applyMiddleware(thunk), devTools)

const rootReducer = combineReducers({
  root: (a={}, b) => a
});

const store = createStore(
  rootReducer,
  initialState,
  middleware
);
store.asyncReducers = {};


export const withStore = fn => fn(store);


export default store;
