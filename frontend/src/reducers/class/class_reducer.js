import {
  RECEIVE_CLASSES,
  RECEIVE_NEW_CLASS,
  RECEIVE_CLASS,
  REMOVE_CLASS
} from '../../actions/class/class_action';

import { 
  RECEIVE_NEW_CLASSTIME,
  REMOVE_CLASSTIME
} from '../../actions/classtime_action';

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
      newState.all = {...newState.all, [action._class.data._id]: action._class.data }
      return newState;
    case RECEIVE_CLASS:
      classId = action._class.data._id;
      newState.all[classId] = action._class.data
      return newState;
    case REMOVE_CLASS:
      classId = action._class.data._id;
      delete newState.all[classId]
      return newState; 

    case RECEIVE_NEW_CLASSTIME:
      classId = action.classTime.data.class;
      newState.all[classId].classTimes = [...action.classTime.data._id]
      return newState;
    case REMOVE_CLASSTIME:
      classId = action.classTime.data.class;
      let classTimeId = action.classTime.data._id;
      newState.all[classId].classTimes = newState.all[classId].classTimes.filter(id => id !== classTimeId)

    default: 
      return state;
  }
}