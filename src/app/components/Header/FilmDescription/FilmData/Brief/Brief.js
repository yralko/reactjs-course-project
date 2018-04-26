import React from 'react';
import classes from './index.css';

const Brief = props => (
  <div className={classes.Brief}>
    <div className={classes.upperRow}>
      <h2>Film name {props.title}</h2>
      <span className={classes.filmRating}>{props.rating}</span>
    </div>
    <p className={classes.genres}>
      {props.genres.length > 1
        ? `${props.genres.slice(0, -1)} & ${props.genres.slice(-1)}`
        : props.genres}
    </p>
    <div className={classes.lowerRow}>
      <span>{props.year.slice(0, 4)}</span>
      <span>{props.duration} min</span>
    </div>
  </div>
);

export default Brief;
