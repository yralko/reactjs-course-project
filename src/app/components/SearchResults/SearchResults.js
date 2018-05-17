import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import classes from './index.css';
import SearchResult from './SearchResult';

export class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.fetchedFilms) {
      return (
        <div className={classes.SearchResults}>
          {this.props.fetchedFilms
            .map(val => <SearchResult
              src={val.poster_path}
              title={val.title}
              tagline={val.tagline}
              genres={val.genres}
              release_date={val.release_date}
              key={val.id}
              id={val.id}
              clicked={() => console.log('clicked')}
            />)
          }
        </div>
      );
    } else {
      return (
        <div className={classes.noResults}>
          <p>No films found</p>
        </div>
      )
    }
  };
}

export const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms.data,
  };
};

export default connect(mapStateToProps)(SearchResults);
