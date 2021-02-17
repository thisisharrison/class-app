import {
  START_LOADING_ALL_CLASSES,
  START_LOADING_SINGLE_CLASS,
  RECEIVE_CLASSES,
  RECEIVE_CLASS,
  RECEIVE_CLASS_ERRORS,
} from '../actions/class/class_action';
import {
  RECEIVE_ADMIN_CLASSES,
  RECEIVE_SAVES
} from '../actions/dashboard_actions';

const loadingState = {
  indexLoading: false,
  detailLoading: false
}

const loadingReducer = (state = loadingState, action) => {
  switch (action.type) {
    case START_LOADING_ALL_CLASSES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_CLASS:
      return Object.assign({}, state, { detailLoading: true });
    case RECEIVE_CLASSES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_CLASS:
      return Object.assign({}, state, { detailLoading: false });
    case RECEIVE_CLASS_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case RECEIVE_ADMIN_CLASSES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_SAVES:
      return Object.assign({}, state, { indexLoading: false });
    default:
      return state;
  }
}

export default loadingReducer;