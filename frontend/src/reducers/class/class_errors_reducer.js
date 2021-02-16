import { 
  RECEIVE_CLASS_ERRORS,
  RECEIVE_CLASS
} from '../../actions/class/class_action';
import {
  RECEIVE_CLASSTIMES
} from '../../actions/classtime_action';

const _nullErrors = {name: [], description: [], tags: [], languages: [], ownership: []};

const classErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CLASS_ERRORS:
      return action.errors;
    // case RECEIVE_CLASS:
    //   return state;
    // case RECEIVE_CLASSTIMES:
    //   return state;
    // In any other case, return null errors
    default:
      return _nullErrors;
  }
}

export default classErrorsReducer;