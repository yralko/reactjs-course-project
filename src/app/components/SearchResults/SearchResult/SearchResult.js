import React from 'react';
import Brief from './Brief';
import Poster from './Poster';
import classes from './index.css';

const SearchResult = (props) => {
  const dummyData = {
        "id": 337167,
        "title": "Fifty Shades Freed",
        "tagline": "Don't miss the climax",
        "vote_average": 6.1,
        "vote_count": 1195,
        "release_date": "2018-02-07",
        "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "budget": 55000000,
        "revenue": 136906000,
        "genres": ["Drama", "Romance"],
        "runtime": 106
    };

  return (
    <div className={classes.SearchResult}>
      <Poster src={dummyData.poster_path} alt={`${dummyData.title}: ${dummyData.tagline}`} />
      <Brief filmTitle={dummyData.title} genres={dummyData.genres.join(' & ')} date={dummyData.release_date.slice(0, 4)} />
    </div>
  );
};

export default SearchResult;
