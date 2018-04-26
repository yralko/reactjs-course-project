import React from 'react';
import { connect } from 'react-redux';
import { selectFilm } from '../../store/actions'
import { Component } from 'react';
import classes from './index.css';
import SearchResult from './SearchResult';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  sortFilms(films, criterion) {
    return [].concat(films).sort((a,b) => {
      if( a[criterion] > b[criterion]) {
        return 1;
    }

      return 0;
    });
  }

  render() {
    if (this.props.foundFilms.length) {
      const sortedFilms = this.sortFilms(this.props.foundFilms, this.props.sortParameter);

      return (
        <div className={classes.SearchResults}>
          {sortedFilms
            .map(val => <SearchResult
              src={val.poster_path}
              title={val.title}
              tagline={val.tagline}
              genres={val.genres}
              release_date={val.release_date}
              key={val.id}
              id={val.id}
              clicked={() => this.props.selectFilm(val.id)}
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

const mapStateToProps = (state) => {
  return {
    foundFilms: state.foundFilms,
    sortParameter: state.sortParameter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectFilm: filmId => (dispatch(selectFilm(filmId))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
