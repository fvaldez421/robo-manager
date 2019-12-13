import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { domain } from './constants';

const domainSelector = global => global[domain] || fromJS({});


export const createKeySelector = key => () =>
  createSelector(
    domainSelector,
    localState => localState.get(key, {})
  )

export const createListSelector = key => () =>
  createSelector(
    domainSelector,
    localState => localState.get(key, [])
  )

