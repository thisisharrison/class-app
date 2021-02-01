import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  // BONUS: render Logout under My Account
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <span>
          <Link to={'/classes'}>Classes</Link>
          {this.props.isAdmin ? (<Link to={'/new-class'}>New Class</Link>) : ''}
          <Link to={`/profile`}>My Account</Link>
          <button onClick={this.logoutUser}>Sign Out</button>
        </span>
      )
    } else {
      return (
        <span>
          <Link to={'/login'}>Classes</Link>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Log In</Link>
        </span>
      )
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    
  }
  
  render() {
    return (
      <div>
          <h1>Logo</h1>
          <Link to={'/#'}>Women</Link>
          <Link to={'/#'}>Men</Link>
          <Link to={'/#'}>Accessories</Link>
          <Link to={'/#'}>Community</Link>
          {this.getLinks()}
      </div>
    )
  }
}
