import {
  RECEIVE_CLASSTIMES,
  RECEIVE_NEW_CLASSTIME,
  REMOVE_CLASSTIME
} from '../../actions/classtime_action';

const _initialState = {
  all: {},
  new: undefined
}
const classTimeReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CLASSTIMES:
      newState.all = {
        ...newState.all, ...action.classTimes.data
      }
      return newState;
    case RECEIVE_NEW_CLASSTIME:
      newState.new = action.classTime.data
      return newState;
    case REMOVE_CLASSTIME:
      delete newState.all[action.classTime.data._id]
      return state;

    default: 
      return state;

  }
}

export default classTimeReducer;