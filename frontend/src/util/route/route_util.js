import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// routes for authorization
const Auth = ({ component: Component, loggedIn, ...rest }) => (
  <Route 
    {...rest}
    render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the classes page if the user is authenticated
        <Redirect to="/classes" />
      )
  )} />
);

// authenticated users only
const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/login" />
        )
    }
  />
);

// admin users only
const Admin = ({ component: Component, isAdmin, loggedIn, ...rest}) => (
  <Route 
    {...rest}
    render={props => 
      (loggedIn && isAdmin) ? (
        <Component {...props} />
      ) : (
        // Redirect to current user's page if not admin
        <Redirect to="/profile" />
      )
    }
  />
)

// Use the isAuthenitcated slice of state to determine whether a user is logged in
const mapStateToProps = state => (
  { 
    loggedIn: state.session.isAuthenticated, 
    isAdmin: state.session.isAdmin || false
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const AdminRoute = withRouter(connect(mapStateToProps)(Admin));