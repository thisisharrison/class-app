import { combineReducers } from 'redux';
import session from './session/session_errors_reducer';
import classes from './class/class_errors_reducer';
import classtimes from './classtime/classtime_errors_reducer';

export default combineReducers({
  session,
  classes,
  classtimes
})