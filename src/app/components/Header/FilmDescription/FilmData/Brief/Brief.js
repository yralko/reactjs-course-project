import React from 'react';
import classes from './index.css';

const Brief = (props) => {
  return (
    <div>
      <h2>Film name {props.title}</h2>
      <p>Rating <span>{props.rating}</span></p>
      <p>Year of production {props.year}</p>
      <p>Duration {props.duration} min</p>
    </div>
  );
};

export default Brief;
