import React from 'react';
import Logo from '../Logo/Logo';
import classes from './index.css';

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.wrapper}>
      <Logo />
    </div>
  </footer>
);

export default Footer;
