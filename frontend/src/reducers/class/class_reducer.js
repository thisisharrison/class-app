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

  switch(action.type) {
    case RECEIVE_CLASSES:
      newState.all = action.classes.data;
      return newState;
    case RECEIVE_NEW_CLASS:
      newState.new = action._class.data;
      return newState;
    case RECEIVE_CLASS:
      let k = action._class.data._id;
      newState.all[k] = { ...newState.all[k], ...action._class.data }
      return newState;
    // For now do not implement
    // case RECEIVE_CLASSTIMES:
    //   let key = Object.keys(action.classTimes.data)[0];
    //   newState.all[key] = { ...newState.all[key], classTimes: action.classTimes.data }
    //   return newState;
    // case REMOVE_CLASSTIME:
    //   let classId = action.classTime.data.class
    //   let classTimeId = action.classTime.data._id
    //   newState.all[classId].classTimes = newState.all[classId].classTimes.filter(classtime => classtime._id !== classTimeId)
    //   return newState;
    default: 
      return state;
  }
}