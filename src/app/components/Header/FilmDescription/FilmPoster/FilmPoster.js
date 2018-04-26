import React from 'react';
import classes from './index.css';

const FilmPoster = props => (
  <div className={classes.FilmPoster}>
    <img
      src={props.src}
      alt={props.alt}
    />
  </div>
);

export default FilmPoster;
