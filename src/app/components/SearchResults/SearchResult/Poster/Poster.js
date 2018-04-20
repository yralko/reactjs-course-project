import React from 'react';
import classes from './index.css';

const Poster = (props) => {
  return (
    <div className={classes.Poster}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Poster;
