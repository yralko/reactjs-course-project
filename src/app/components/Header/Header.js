import React, { Component } from 'react';
import Searchbox from './Searchbox/Searchbox';
import Logo from '../Logo/Logo';
import classes from './index.css';

class Header extends Component {

  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.wrapper}>
          <Logo />
          <Searchbox />
        </div>
      </div>
    );
  }
}

export default Header;
