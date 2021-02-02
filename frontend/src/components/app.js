import React from 'react';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route/route_util';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/home_page';
import NavBarContainer from './nav/navbar_container';
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import Session from './session/session_container';
import ClassesContainer from './class/class_container';
import ClassFormContainer from './class/class_form_container';
import ProfileContainer from './profile/profile_container';
import ClassTimeContainer from './classtime/classtime_container';

// Homepage: landing page of e-commerce site
// Class Pass Landing Page: show classes, fitlers, prompt user to register / login
// Session Pages (register and login)
// User Profile (show saves and bookings if any)
// Class Show Page (show Class Times)

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <AuthRoute exact path="/account/login" component={Session} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      <Route exact path="/classes" component={ClassesContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <AdminRoute exact path="/new-class" component={ClassFormContainer} />

      <Route exact path="/classes/:id" component={ClassTimeContainer} />

    </Switch>
  </div>
);

export default App;