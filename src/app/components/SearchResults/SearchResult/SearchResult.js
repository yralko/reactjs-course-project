import React from 'react';
import Brief from './Brief';
import Poster from './Poster';
import classes from './index.css';

const SearchResult = (props) => {
  return (
    <div
      className={classes.SearchResult}
      onClick={() => props.clicked(props.id)}
    >
      <Poster
        src={props.src}
        alt={`${props.title}: ${props.tagline}`}
      />
      <Brief
        filmTitle={props.title}
        genres={props.genres.length > 1
          ? `${props.genres.slice(0, -1).join(', ')} & ${props.genres.slice(-1)}`
          : props.genres.toString()}
        date={props.release_date.slice(0, 4)}
      />
    </div>
  );
};

export default SearchResult;
