import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import night from '../../images/night.gif'
import day from '../../images/day.gif'
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupModal from '../SignupModal'
import AboutModal from '../AboutModal'
import ItemListModal from '../ItemListModal'
import SearchFormModal from '../SearchModal'
import ManageModal from '../ManageModal'
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
      <ManageModal />
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

  const nightBg = './../images/night-nav.gif'
  return (
    <div 
    className='navbar-container'
    style={themeName === 'dark' ? {backgroundImage: `url(${night})`} : {backgroundColor: `orange`}}
    >
        <div className='links-container'>{isLoaded && sessionLinks}</div>
        
        
    </div>
  );
}

export default Navigation;