import { 
  RECEIVE_CLASSTIME_ERORRS,
  RECEIVE_UPDATE_CLASSTIME,
  REMOVE_CLASSTIME,
  RECEIVE_NEW_CLASSTIME,
  RECEIVE_CLASSTIMES
} from '../../actions/classtime_action';

const _nullErrors = { startTime: '', endTime: '' };

const classTimeErrorsReducer = (state = _nullErrors, action) => {
  switch(action.type) {
    case RECEIVE_CLASSTIME_ERORRS:
      return action.errors;
    case RECEIVE_UPDATE_CLASSTIME:
      return _nullErrors;
    case REMOVE_CLASSTIME:
      return _nullErrors;
    case RECEIVE_NEW_CLASSTIME:
      return _nullErrors;
    case RECEIVE_CLASSTIMES:
      return _nullErrors;
    default:
      return state;
  }
}

export default classTimeErrorsReducer;