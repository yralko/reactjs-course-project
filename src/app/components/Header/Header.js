import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import Logo from '../Logo/Logo';
import classes from './index.css';

export const Header = () => (
  <div className={classes.Header}>
    <div className={classes.overlay}>
      <div className={classes.wrapper}>
        <Logo />
        <Switch>
          <Route path='/movies/:id' component={FilmDescription} />
          <Route path='/' component={Searchbox} />
        </Switch>
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
