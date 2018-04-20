import React from 'react';
import classes from './index.css';

const Brief = props => {
  return (
    <div>
      <h3>{props.filmTitle}</h3>
      <p>{props.genres}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default Brief;
