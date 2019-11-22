import { combineReducers } from "redux";
import robotsReducer from '../containers/Robots/reducer';


export default combineReducers ({
  Robots: robotsReducer
});