import React from 'react';
import { connect } from 'react-redux';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import SearchResultsBar from './SearchResultsBar';
import Logo from '../Logo/Logo';
import classes from './index.css';

export const Header = (props) => {
  let renderedContent;

  if (props.filmIsSelected) {
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
        <SearchResultsBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filmIsSelected: state.filmIsSelected,
  };
};

export default connect(mapStateToProps)(Header);
