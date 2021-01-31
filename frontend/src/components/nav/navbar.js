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
        <div>
          <Link to={`/users/${this.props.currentUserId}`}>My Account</Link>
          <button onClick={this.logoutUser}>Sign Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Log In</Link>
        </div>
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
          <Link to={'/#'}>Classes</Link>
          {this.getLinks()}
      </div>
    )
  }
}
