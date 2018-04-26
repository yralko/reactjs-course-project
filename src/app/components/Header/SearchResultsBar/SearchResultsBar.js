import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './index.css';

const SearchResultsBar = props => (
  <div className={classes.SearchResultsBar}>
    <div className="total-found">
      <span>{props.foundFilms.length} {props.foundFilms.length === 1 ? 'film' : 'films'} found</span>
    </div>
    <div className="sort-options">
      <span>Sort by </span>
      <button
        className={classes.sortOptions}
        onClick={() => props.sortFilms('release_date')}
      >
        release date
      </button>
      <button
        className={classes.sortOptions}
        onClick={() => props.sortFilms('vote_average')}
      >
        rating
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    foundFilms: state.foundFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortFilms: sortParameter => dispatch(actions.sortFilms(sortParameter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsBar);
