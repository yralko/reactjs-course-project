import React from 'react';
import classes from './index.css';

const Brief = props => (
  <div className={classes.Brief}>
    <div className={classes.upperRow}>
      <h4 className={classes.title}>{props.filmTitle}</h4>
      <span className={classes.date}>{props.date}</span>
    </div>
    <p className={classes.genres}>{props.genres}</p>
  </div>
);

export default Brief;
