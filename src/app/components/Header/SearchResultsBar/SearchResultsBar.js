import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './index.css';

const SearchResultsBar = (props) => {
  return (
    <div>
      <div className="total-found">
        {props.foundFilms.length} {props.foundFilms.length === 1 ? 'film' : 'films'} found.
      </div>
      <div className="sort-options">
        <span>Sort by </span>
      <span className={classes.sortOptions} onClick={() => props.sortFilms('release_date')}>release date </span>
    <span className={classes.sortOptions} onClick={() => props.sortFilms('vote_average')}>rating</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    foundFilms: state.foundFilms,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortFilms: sortParameter => dispatch(actions.sortFilms(sortParameter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsBar);
