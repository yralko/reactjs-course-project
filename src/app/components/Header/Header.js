import React from 'react';
import { connect } from 'react-redux';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import SearchResultsBar from './SearchResultsBar';
import Logo from '../Logo/Logo';
import classes from './index.css';

const Header = (props) => {
  let headerContent = null;
  if (!props.filmSelected) {
    headerContent = <Searchbox />;
  } else {
    headerContent = <FilmDescription />;
  }

  return (
    <div className={classes.Header}>
      <div className={classes.overlay}>
        <div className={classes.wrapper}>
          <Logo />
          {headerContent}
        </div>
        {!props.initialPage && !props.filmSelected && <SearchResultsBar />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filmSelected: state.filmSelected,
    initialPage: state.initialPage,
  };
};

export default connect(mapStateToProps)(Header);
