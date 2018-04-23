import React from 'react';
import Brief from './Brief';
import Cast from './Cast';
import Synopsis from './Synopsis';
import classes from './index.css';

const FilmData = props => {
  const filmData = props.filmData;
  return (
    <div className={classes.FilmData}>
      <Brief
        title={filmData.title}
        rating={filmData.rating}
        year={filmData.release_date}
        duration={filmData.duration} />
      <Synopsis overview={filmData.overview} />
      <Cast />
    </div>
  )
}

export default FilmData;
