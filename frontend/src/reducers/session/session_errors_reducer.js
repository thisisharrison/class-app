import { 
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../../actions/session/session_actions';

const _nullErrors = {login: [], register: []};

export default function (state = _nullErrors, action) {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: 
      newState = Object.assign({}, state, { [action.key]: action.errors });
      return newState;
    case RECEIVE_CURRENT_USER: 
      return _nullErrors;
    default:
      return state;
  }
}