import { fromJS } from 'immutable';
import { LOAD_ORGS_REQUEST, LOAD_ORGS_SUCCESS, LOAD_ORGS_FAILURE } from './constants';

const initialState = fromJS({
  status: 'initial',
  organizations: null,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORGS_REQUEST:
      return state.set('status', 'loading');
    case LOAD_ORGS_SUCCESS:
      return state.set('status', 'loaded').set('organizations', action.payload.results);
    case LOAD_ORGS_FAILURE:
      return state.set('status', 'error').set('organizations', []);
    default:
      return state;
  };
};