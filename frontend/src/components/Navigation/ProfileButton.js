import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useTheme } from '../../context/ThemeContext'




function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const {themeName, setThemeName} = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    setThemeName('day')
    dispatch(sessionActions.logout());
  };


  
  return (
    <>
      <button onClick={openMenu} className='navbutton'>
      <i class="fas fa-book" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}


    </>
  );
}

export default ProfileButton;
