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
              film={val}
              key={val.id}
              clicked={() => props.selectFilm('clicked')}
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectFilm: (film) => dispatch(actions.selectFilm(film)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
