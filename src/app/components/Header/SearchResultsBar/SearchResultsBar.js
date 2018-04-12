import React from 'react';
import classes from './index.css';

const SearchResultsBar = props => {
  return (
    <div>
      <div className="total-found"></div>
      <div className="sort-options">
        <span>Sort by</span>
        <span>release date</span>
        <span>rating</span>
      </div>
    </div>
  )
}

export default SearchResultsBar;
