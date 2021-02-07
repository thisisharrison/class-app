import React from 'react';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route/route_util';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/home_page';
import NavBarContainer from './nav/navbar_container';
import Session from './session/session_container';
import SearchContainer from './search/search_container';
import ClassShowContainer from './class/class_show_container';


import ProfileContainer from './profile/profile_container';
import ClassTimeContainer from './classtime/classtime_container';
import ClassFormContainer from './class/class_form_container';


// Homepage: landing page of e-commerce site
// Class Pass Landing Page: show classes, fitlers, prompt user to register / login
// Session Pages (register and login)
// User Profile (show saves and bookings if any)
// Class Show Page (show Class Times)

const App = () => (
  <div>
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