import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import Routes from './Routes'
import Logo from '../Logo/Logo';
import classes from './index.css';

export const Header = () => (
  <div className={classes.Header}>
    <div className={classes.overlay}>
      <div className={classes.wrapper}>
        <Logo />
        {renderRoutes(Routes)}
      </div>
    </div>
  </div>
);

export const mapStateToProps = (state) => {
  return {
    currentFilm: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Header);
