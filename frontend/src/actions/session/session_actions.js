import * as APIUtil from '../../util/session/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem('jwtToken');
  // remove token from axios headers
  APIUtil.setAuthToken(false);
  // dispatch logout action
  dispatch(logoutUser());
}