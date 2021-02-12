import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// TO DO
import App from './app';
import '../App.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;