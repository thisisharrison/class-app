import {
  RECEIVE_CLASSES,
  RECEIVE_NEW_CLASS,
  RECEIVE_CLASS
} from '../../actions/class/class_action';

import { 
  RECEIVE_CLASSTIMES
} from '../../actions/classtime_action';

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
      newState.all = {...newState.all, [action._class.data._id]: action._class.data }
      return newState;
    case RECEIVE_CLASSTIMES:
      let data = action.classTimes.data
      let classId = Object.keys(data)[0]
      newState.all[classId]['classTimes'] = data;
      return newState;
    default: 
      return state;
  }
}