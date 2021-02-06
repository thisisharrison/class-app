import { combineReducers } from "redux";
import classes from './class/class_reducer'
import classTimes from './classtime/classtime_reducer';
import dashboard from './dashboard_reducer';

export default combineReducers({
  classes,
  classTimes
})