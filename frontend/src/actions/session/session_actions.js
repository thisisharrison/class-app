import * as APIUtil from '../../util/session/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// when user signs in 
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// redirect to login page after registering
export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

// show authentication errors on the frontend
export const receiveErrors = (key, errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  key,
  errors
});

// set isAuthenticated to false 
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

// dispatch appropriate actions depending on response
export const signup = user => dispatch => (
  APIUtil.signup(user).then(() => (
    dispatch(receiveUserSignIn())
  ), err => (
    dispatch(receiveErrors('register', err.response.data))
  ))
);

// set the session token of current user
export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    const {token} = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
  }).catch(err => {
    dispatch(receiveErrors('login', err.response.data))
  })
)

export const logout = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem('jwtToken');
  // remove token from axios headers
  APIUtil.setAuthToken(false);
  // dispatch logout action
  dispatch(logoutUser());
}