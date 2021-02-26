import {
  RECEIVE_CLASSTIMES,
  RECEIVE_NEW_CLASSTIME,
  REMOVE_CLASSTIME,
  EDIT_CLASSTIME,
  RECEIVE_UPDATE_CLASSTIME
} from '../../actions/classtime_action';
import {
  RECEIVE_BOOKING
} from '../../actions/dashboard_actions';

const _initialState = {
  all: [],
  new: undefined
}
const classTimeReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CLASSTIMES:
      newState.all = action.classTimes.data
      return newState;
    
    case RECEIVE_NEW_CLASSTIME:
      newState.all = [...newState.all, action.classTime.data]
      return newState;

    case REMOVE_CLASSTIME:
      newState.all = newState.all.filter(classtime => classtime._id !== action.classTime.data._id)
      return newState;

    case EDIT_CLASSTIME:
      newState.new = action.classTime
      return newState;

    case RECEIVE_UPDATE_CLASSTIME:
      newState.new = undefined;
      newState.all = newState.all.map(classtime => {
        if (classtime._id === action.classTime.data._id) {
          return action.classTime.data;
        } else {
          return classtime;
        }
      })
      return newState;
    
    case RECEIVE_BOOKING:
      
      return state;
      
    default: 
      return state;

  }
}

export default classTimeReducer;