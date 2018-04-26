import React from 'react';
import classes from './index.css';

const Synopsis = props => {
  return (
    <p className={classes.Synopsis}>{props.overview}</p>
  )
}

export default Synopsis;
