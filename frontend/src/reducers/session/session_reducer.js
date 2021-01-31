import { RECEIVE_USER_LOGOUT } from '../../actions/session/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_LOGOUT: 
      return {
        isAuthenticated: false,
        user: undefined
      };
    default: 
      return state;
  }
}