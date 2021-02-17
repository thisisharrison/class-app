import { combineReducers } from "redux";
import filters from './filter_reducer';
import greetings from './greetings_reducer';
import loading from './loading_reducer';

export default combineReducers({
  filters,
  greetings,
  loading
})