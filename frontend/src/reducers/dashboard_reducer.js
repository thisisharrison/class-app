import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_SAVES,
  RECEIVE_SAVE,
  REMOVE_SAVE
} from '../actions/dashboard_actions';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session/session_actions';

const initialState = { bookings: [], saves: [] };

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
    default:
      return state;
  }
}

export default dashboardReducer;