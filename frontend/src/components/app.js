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

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/styles';
import { Container } from '@material-ui/core'
import PromptLoginContainer from './greeting/prompt_login_container';


const App = () => (
  <div>
    <NavBarContainer />
      <ThemeProvider theme={theme}>
        <PromptLoginContainer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthRoute exact path="/account/login" component={Session} />
          <Route exact path="/new-class" component={ClassFormContainer} />
          <Route exact path="/classes/:id/edit" component={ClassShowContainer} />     
          <Route exact path="/classes" component={SearchContainer} />
          <Route exact path="/classes/:id" component={ClassShowContainer} />
          <Container maxwidth="sm">
              <Route exact path="/profile" component={ProfileContainer} />
          </Container>
        </Switch>
      </ThemeProvider>
  </div>
);

export default App;