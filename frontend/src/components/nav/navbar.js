import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import MenuIcon from '@material-ui/icons/Menu';
import { NavLink, NavWrapper, NavWrapperMobile, Nav, NavLogoLink } from '../styles/nav_styles';
import NavLogo from './nav_logo';
import { Drawer, IconButton, List, ListItem } from '@material-ui/core';



function NavBar({ history, logout, loggedIn }) {
  function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);
    useEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize', updateScreenSize);
      updateScreenSize();
      return(() => {
        window.removeEventListener('resize', updateScreenSize);
      })
    }, [])
    return screenSize;
  }

  const [width] = useMediaQuery();
  const [drawer, setDrawer] = useState(false);
  
  function getLinks() {
    if (loggedIn) {
      return (
        [
          <NavLink key='profile' to={`/profile`}>My Account</NavLink>,
          <NavLink key='logout' as="button" onClick={logoutUser}>Sign Out</NavLink>
        ]
      )
    } else {
      return (
        [
          <NavLink key='login' to={'/account/login'}>Sign In</NavLink>
        ]
      )
    }
  }

  const links = [
    <NavLink key='kittens' to={'/#'}>Kittens</NavLink>,
    <NavLink key='cats' to={'/#'}>Cats</NavLink>,
    <NavLink key='accessories' to={'/#'}>Accessories</NavLink>,
    <NavLink key='community' to={'/#'}>Community</NavLink>,
    <NavLink key='classes' promo={"true"} to={'/classes'}>Classes</NavLink>
  ]

  function logoutUser(e) {
    e.preventDefault();
    logout();
    history.push('/');
  }
  
  return (
    width < 913 ? 
    (
      <div>
        <NavWrapperMobile>
          <NavLogoLink to={'/#'} mobile={'true'}>
          <div className="mobile-logo">
            <NavLogo />
            <h1>lulukittens</h1>
          </div>
          </NavLogoLink>
          <div className="mobile-nav">
            <IconButton onClick={(e) => setDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </NavWrapperMobile>
        <Drawer open={drawer} onClose={(e) => setDrawer(false)}>
          <List>
            {links.map((link, i) => <ListItem button key={i}>{link}</ListItem>)}
            {getLinks().map((link, i) => <ListItem button key={`${i}-2`}>{link}</ListItem>)}
          </List>
        </Drawer>
      </div>
    ) : 
    (
    <NavWrapper>
      <Nav>
        <NavLogoLink to={'/#'}>
          <NavLogo />
        </NavLogoLink>
        {links.map((link, i) => link)}
        {getLinks().map((link, i) => link)}
      </Nav>
    </NavWrapper>
    )
  )
}

export default withRouter(NavBar);