import React from 'react';
import { connect } from 'react-redux';
import FilmData from '../FilmData';
import FilmPoster from '../FilmPoster';
import classes from './index.css';

export const CurrentFilm = (props) => {
  if (!props.currentFilm) {
    return null;
  } else {
    return (
      <div className={classes.CurrentFilm}>
         <FilmPoster
           src={props.currentFilm.poster_path}
           alt={props.currentFilm.title}
         />
         <FilmData
           filmData={{
             title: props.currentFilm.title,
             release_date: props.currentFilm.release_date,
             duration: props.currentFilm.runtime,
             overview: props.currentFilm.overview,
             rating: props.currentFilm.vote_average,
             genres: props.currentFilm.genres,
           }}
         />
       </div>
    );
  }
};

export const mapStateToProps = (state) => {
  return {
    currentFilm: state.currentFilm,
  }
}

export default connect(mapStateToProps)(CurrentFilm);
