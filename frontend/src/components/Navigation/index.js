import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupModal from '../SignupModal'
import AboutModal from '../AboutModal'
import ItemListModal from '../ItemListModal'
import SearchFormModal from '../SearchModal'
import { useTheme } from '../../context/ThemeContext'

import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const {themeName} = useTheme();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      <AboutModal/>
      <SearchFormModal />
      <ItemListModal />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupModal/>
        <AboutModal />
        
      </>
    );
  }

  return (
    <div 
    className='navbar-container'
    style={themeName === 'light' ? {backgroundColor: "#d1341f"} : {backgroundColor: "#2c002e"}}
    >
        
        {isLoaded && sessionLinks}
        
    </div>
  );
}

export default Navigation;