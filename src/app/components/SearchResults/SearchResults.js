import React from 'react';
import { connect } from 'react-redux';
import { selectFilm } from '../../store/actions'
import classes from './index.css';
import SearchResult from './SearchResult';

const SearchResults = props => {
  if (props.foundFilms) {
    return (
      <div className={classes.SearchResults}>
        {props.foundFilms
          .map(val => <SearchResult
            src={val.poster_path}
            title={val.title}
            tagline={val.tagline}
            genres={val.genres}
            release_date={val.release_date}
            key={val.id}
            id={val.id}
            clicked={() => props.selectFilm(val.id)}
          />)
        }
      </div>
    );
  }

  return <p>No films yet</p>;
}

const mapStateToProps = (state) => {
  return {
    foundFilms: state.foundFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectFilm: (filmId) => (dispatch(selectFilm(filmId))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
