import React from 'react';
import Brief from './Brief';
import Synopsis from './Synopsis';
import classes from './index.css';

const FilmData = (props) => {
  const { filmData } = props;

  return (
    <div className={classes.FilmData}>
      <Brief
        title={filmData.title}
        rating={filmData.rating}
        year={filmData.release_date}
        duration={filmData.duration}
        genres={filmData.genres}
      />
      <Synopsis overview={filmData.overview} />
    </div>
  );
};

export default FilmData;
