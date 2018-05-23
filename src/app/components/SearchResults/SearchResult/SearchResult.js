import React from 'react';
import Brief from './Brief';
import Poster from './Poster';
import * as actions from '../../../store/actions';
import classes from './index.css';

const SearchResult = props => (
  <div
    className={classes.SearchResult}
    onClick={() => props.clicked(props.film)}
  >
    <Poster
      src={props.film.poster_path}
      alt={`${props.film.title}: ${props.film.tagline}`}
    />
    <Brief
      filmTitle={props.film.title}
      genres={props.film.genres.length > 1
        ? `${props.film.genres.slice(0, -1).join(', ')} & ${props.film.genres.slice(-1)}`
        : props.film.genres.toString()}
      date={props.film.release_date.slice(0, 4)}
    />
  </div>
);

export default SearchResult;
