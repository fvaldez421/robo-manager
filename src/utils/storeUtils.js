import { combineReducers } from 'redux';
import { withStore } from './store';


const createReducer = reducers => combineReducers({ ...reducers });

const updateReducers = store => (key, reducer) => {
  store.asyncReducers[key] = reducer;
  const rootReducer = createReducer(store.asyncReducers);
  store.replaceReducer(rootReducer);
  return store.replaceReducer(rootReducer);
}

export const injectReducer = withStore(updateReducers);
