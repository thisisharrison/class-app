import React from 'react';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route/route_util';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/home_page';
import NavBarContainer from './nav/navbar_container';
import Session from './session/session_container';
import SearchContainer from './search/search_container';
import ClassShowContainer from './class/class_show_container';


import ProfileContainer from './profile/profile_container';
import ClassFormContainer from './class_form/class_form_container';

import styled, { createGlobalStyle } from 'styled-components'

// Homepage: landing page of e-commerce site
// Class Pass Landing Page: show classes, fitlers, prompt user to register / login
// Session Pages (register and login)
// User Profile (show saves and bookings if any)
// Class Show Page (show Class Times)

// Class edit should show ClassFormContainer isNew false 

const Global = createGlobalStyle`
  html {
    font-family: Sans-Serif;
    font-weight: normal;
    background-color:#fafafa;
    color:#000;
  }
  body {
    margin-top: 50px;
    margin-left: 50px;
  }
  body,
  button,
  input,
  select,
  textarea {
    font-family:inherit;
    font-size:1rem;
    font-style:normal;
    font-weight:400;
    line-height:1.2
  }
`


const App = () => (
  <div>
    <Global />

    <NavBarContainer />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <AuthRoute exact path="/account/login" component={Session} />
      <Route exact path="/classes" component={SearchContainer} />
      <Route exact path="/classes/:id" component={ClassShowContainer} />
      <Route exact path="/classes/:id/edit" component={ClassShowContainer} /> 
      <Route exact path="/new-class" render={(props) => <ClassFormContainer {...props} isNew={true} /> } />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      
    </Switch>
  </div>
);

export default App;