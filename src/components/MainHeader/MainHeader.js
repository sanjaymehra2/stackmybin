import React from 'react';
import logo from '../assets/logo.png';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
       <img src={logo} alt="logo" />
      <Navigation />
    </header>
  );
};

export default MainHeader;
