import { 
  RECEIVE_CLASS_ERRORS,
  RECEIVE_CLASS,
  RECEIVE_NEW_CLASS,
  REMOVE_CLASS
} from '../../actions/class/class_action';

const _nullErrors = {name: [], description: [], tags: [], languages: [], ownership: []};

const classErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CLASS_ERRORS:
      return action.errors;
    case RECEIVE_CLASS:
      return _nullErrors;
    case RECEIVE_NEW_CLASS:
      return _nullErrors;
    case REMOVE_CLASS:
      return _nullErrors;
    default:
      return state;
  }
}

export default classErrorsReducer;