import { fromJS } from 'immutable';
import { LOAD_ROBOTS_REQUEST, LOAD_ROBOTS_SUCCESS } from "./constants";


const initialState = fromJS({
  status: 'initial',
  activeRobots: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROBOTS_REQUEST:
      return state.set('status', 'loading');
    case LOAD_ROBOTS_SUCCESS:
      console.log(action)
      return state.set('status', 'loaded').set('activeRobots', action.payload.results);
    default:
      return state;
  };
};