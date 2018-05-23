import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './index.css';


export const SearchResultsBar = (props) => {
  return (
    <div className={classes.SearchResultsBar}>
      <div>
        <span data-id="total-found">{props.fetchedFilms.total} {props.fetchedFilms.total === 1 ? 'film' : 'films'} found</span>
      </div>
      <div className="classes.sort-options">
        <span>Sort by </span>
        <button
          className={props.sortBy === 'release_date' ? classes.sortOptions.active : classes.sortOptions}
          onClick={() => props.requestFilms({ param: 'sortBy', value: 'release_date' })}
        >
          release date
        </button>
        <button
          className={props.sortBy === 'vote_average' ? classes.sortOptions.active : classes.sortOptions}
          onClick={() => props.requestFilms({ param: 'sortBy', value: 'vote_average' })}
        >
          rating
        </button>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    sortBy: state.query.sortBy,
    fetchedFilms: state.fetchedFilms,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: updatedParam => dispatch(actions.requestFilms(updatedParam))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsBar);
