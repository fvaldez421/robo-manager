import { combineReducers } from 'redux';
import { rootReducer, withStore } from './store';



const updateReducers = store => (key, reducer) => {
  store.asyncReducers[key] = reducer;
  return store.replaceReducer(combineReducers(store.asyncReducers));
}

export const injectReducer = withStore(updateReducers);
