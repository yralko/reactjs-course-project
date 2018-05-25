import React from 'react';
import { connect } from 'react-redux';
import classes from './index.css';
import * as actions from '../../store/actions';
import SearchResult from './SearchResult';

export const SearchResults = (props) => {
  if (!props.fetchedFilms) {
    return (
      <div className={classes.noResults}>
        <p>No films found</p>
      </div>
    );
  }

  return (
    <div data-selector="search-results" className={classes.SearchResults}>
      {props.fetchedFilms
        .map(val => (<SearchResult
          film={val}
          key={val.id}
          clicked={(film) => props.selectFilm(film)}
        />))
      }
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms.data,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    selectFilm: film => dispatch(actions.selectFilm(film)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
