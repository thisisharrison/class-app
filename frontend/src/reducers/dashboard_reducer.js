import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_SAVES,
  RECEIVE_SAVE,
  REMOVE_SAVE,
  RECEIVE_ADMIN_CLASSES
} from '../actions/dashboard_actions';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session/session_actions';
import {
  REMOVE_CLASS
} from '../actions/class/class_action';

const initialState = { bookings: [], saves: [], classes: [] };

const dashboardReducer = (state = initialState, action) => {
  Object.freeze({}, state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.bookings = action.currentUser.bookings
      newState.saves = action.currentUser.saves
      return newState;
    case RECEIVE_BOOKINGS:
      newState.bookings = action.bookings.data;
      return newState;
    case RECEIVE_BOOKING:
      newState.bookings = [...action.bookings.data];
      return newState;
    case REMOVE_BOOKING:
      newState.bookings = [...action.bookings.data];
      return newState;
    case RECEIVE_SAVES:
      newState.saves = action.saves.data;
      return newState;
    case RECEIVE_SAVE:
      newState.saves = [...action.saves.data];
      return newState;
    case REMOVE_SAVE:
      newState.saves = [...action.saves.data];
      return newState;
    case RECEIVE_ADMIN_CLASSES: 
      newState.classes = action.classes.data
      return newState;
    case REMOVE_CLASS:
      newState.classes = newState.classes.filter(_class => _class._id !== action._class.data._id);
      return newState;
    default:
      return state;
  }
}

export default dashboardReducer;