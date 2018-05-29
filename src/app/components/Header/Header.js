import React from 'react';
import { connect } from 'react-redux';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import Logo from '../Logo/Logo';
import classes from './index.css';

export const Header = (props) => {
  let renderedContent;

  if (props.currentFilm) {
    console.log(props.currentFilm);
    renderedContent = <FilmDescription />;
  } else {
    renderedContent = <Searchbox />;
  }

  return (
    <div className={classes.Header}>
      <div className={classes.overlay}>
        <div className={classes.wrapper}>
          <Logo />
          {renderedContent}
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    currentFilm: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Header);
