import {
  RECEIVE_CLASSES,
  RECEIVE_NEW_CLASS,
  RECEIVE_CLASS
} from '../../actions/class/class_action';

// import { 
//   RECEIVE_CLASSTIMES,
//   REMOVE_CLASSTIME
// } from '../../actions/classtime_action';

const _initialState = {
  all: {},
  new: undefined
}
export default function(state = _initialState, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let classId;

  switch(action.type) {
    case RECEIVE_CLASSES:
      newState.all = action.classes.data;
      return newState;
    case RECEIVE_NEW_CLASS:
      newState.new = action._class.data;
      return newState;
    case RECEIVE_CLASS:
      classId = action._class.data._id;
      newState.all[classId] = { ...newState.all[classId], ...action._class.data }
      return newState;
    default: 
      return state;
  }
}