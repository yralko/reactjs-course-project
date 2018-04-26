import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmData from './FilmData';
import FilmPoster from './FilmPoster';
import classes from './index.css';
import * as actions from '../../../store/actions';

const FilmDescription = (props) => {
  let renderedContent;

  if (props.fetchedFilms) {
    const currentFilm = props.fetchedFilms
      .filter(val => val.id === props.selectedFilmId)[0];

    renderedContent = (
      <div className={classes.FilmDescription}>
        <FilmPoster
          src={currentFilm.poster_path}
        />
        <FilmData
          filmData={{
            title: currentFilm.title,
            release_date: currentFilm.release_date,
            duration: currentFilm.runtime,
            overview: currentFilm.overview,
            rating: currentFilm.vote_average,
            genres: currentFilm.genres,
          }}
        />
      </div>
    );
  } else {
    renderedContent = <p>Loading ...</p>;
  }

  return (
    <div>
      <button
        className={classes.returnToSearch}
        onClick={() => props.returnToSearchbox()}
      >
        Search
      </button>
      {renderedContent}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilmId: state.selectedFilmId,
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    returnToSearchbox: () => dispatch(actions.returnToSearchbox()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
