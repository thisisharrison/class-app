import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink, NavWrapper, Nav, NavLogoLink } from '../styles/nav_styles';
import NavLogo from './nav_logo';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <NavLink to={'/new-class'}>New Class</NavLink>
          <NavLink to={`/profile`}>My Account</NavLink>
          <NavLink as="button" onClick={this.logoutUser}>Sign Out</NavLink>
        </>
      )
    } else {
      return (
        <>
          <NavLink to={'/account/login'}>Sign In</NavLink>
        </>
      )
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }
  
  render() {
    return (
      <NavWrapper>
      <Nav>
        <NavLogoLink to={'/#'}>
          <NavLogo />
        </NavLogoLink>
        <NavLink to={'/#'}>Kittens</NavLink>
        <NavLink to={'/#'}>Cats</NavLink>
        <NavLink to={'/#'}>Accessories</NavLink>
        <NavLink to={'/#'}>Community</NavLink>
        <NavLink promo={"true"} to={'/classes'}>Classes</NavLink>
        {this.getLinks()}
      </Nav>
      </NavWrapper>
    )
  }
}

export default withRouter(NavBar);