import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupModal from '../SignupModal'
import AboutModal from '../AboutModal'
import { useTheme } from '../../context/ThemeContext'

import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const {themeName} = useTheme();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupModal/>
        <AboutModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div 
    className='navbar-container'
    style={themeName === 'light' ? {backgroundColor: "#d1341f"} : {backgroundColor: "#2c002e"}}
    >
        {/* <NavLink exact to="/">Home</NavLink> */}
        {isLoaded && sessionLinks}
        
    </div>
  );
}

export default Navigation;