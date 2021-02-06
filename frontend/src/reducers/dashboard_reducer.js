import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_SAVES,
  RECEIVE_SAVE,
  REMOVE_SAVE
} from '../actions/dashboard_actions';

const initialState = { bookings: [], saves: [] };

const dashboardReducer = (state = initialState, action) => {
  let newState = Object.freeze({}, state);
  
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      newState.bookings = action.bookings;
      return newState;
    case RECEIVE_BOOKING:
      newState.bookings = action.bookings;
      return newState;
    case REMOVE_BOOKING:
      newState.bookings = action.bookings;
      return newState;
    case RECEIVE_SAVES:
      newState.saves = action.saves;
      return newState;
    case RECEIVE_SAVE:
      newState.saves = action.saves;
      return newState;
    case REMOVE_SAVE:
      newState.saves = action.saves;
      return newState;
    default:
      return state;
  }
}

export default dashboardReducer;