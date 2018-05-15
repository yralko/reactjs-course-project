import React from 'react';
import { connect } from 'react-redux';
import FilmData from '../FilmData';
import FilmPoster from '../FilmPoster';
import classes from './index.css';
import * as actions from '../../../../store/actions';

export const CurrentFilm = (props) => {
  if (props.fetchedFilms) {
    const currentFilm = props.fetchedFilms
      .filter(val => val.id === props.selectedFilmId)[0];
    return (
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
  }

  return null;
};

export default connect(mapStateToProps)(CurrentFilm);
