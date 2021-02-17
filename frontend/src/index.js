import React from 'react';
import ReactDOM from 'react-dom';
// parse the user's session token
import jwt_decode from 'jwt-decode';

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session/session_api_util';
import { logout } from './actions/session/session_actions';
import moment from 'moment';

import './spinner.css';

import * as ClassUtil from './actions/class/class_action';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // if a returning user has a session token in localStorage
  if (localStorage.jwtToken) {

    // set the token as common header for all axios requests
    setAuthToken(localStorage.jwtToken)

    // decode the token to obtain user's info
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // preconfigured State that we can load to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If user's token has expired
    if (decodedUser.exp < currentTime) {
      // logout user and redirect to login page
      store.dispatch(logout());
      window.location.href = '/account/login';
    } 
  } else {
    // this is a first time user, start with an empty store
    store = configureStore({});
  }
  // render root
  const root = document.getElementById('root');

  window.ClassUtil = ClassUtil;
  window.store = store
  window.dispatch = store.dispatch;
  window.moment = moment;
  ReactDOM.render(<Root store={store}/>, root);
})