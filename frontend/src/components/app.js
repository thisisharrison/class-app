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
import { Container } from '@material-ui/core'
import PromptLoginContainer from './greeting/prompt_login_container';

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
    background-color: #fff;
    color: #000;
  }
  body,
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2
  },
  h2 {
    color: blue;
    font-weight: 600;
    line-height: 1.1;
    margin: 0 auto 1.875rem;
  }
`


const App = () => (
  <div>
    <NavBarContainer />
      <PromptLoginContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/account/login" component={Session} />
        <Route exact path="/new-class" component={ClassFormContainer} />
        <Route exact path="/classes/:id/edit" component={ClassShowContainer} />     
        <Container maxwidth="sm">
            <Route exact path="/classes" component={SearchContainer} />
            <Route exact path="/classes/:id" component={ClassShowContainer} />
            <Route exact path="/profile" component={ProfileContainer} />
        </Container>
        {/* <Route exact path="/new-class" render={(props) => <ClassFormContainer {...props} isNew={true} />} /> */}
      </Switch>
  </div>
);

export default App;