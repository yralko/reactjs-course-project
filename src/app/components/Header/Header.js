import React from 'react';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import SearchResultsBar from './SearchResultsBar';
import Logo from '../Logo/Logo';
import classes from './index.css';

export const Header = () => (
  <div className={classes.Header}>
    <div className={classes.overlay}>
      <div className={classes.wrapper}>
        <Logo />
        <Searchbox />
      </div>
      <SearchResultsBar />
    </div>
  </div>
);

export default Header;
