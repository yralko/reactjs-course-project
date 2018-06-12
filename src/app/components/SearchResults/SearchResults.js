import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import classes from './index.css';
import * as actions from '../../store/actions';
import SearchResult from './SearchResult';


export class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const query = this.props.location ? this.props.location.search : null;

    if (query) {
      const parsed = queryString.parse(query);
      Object.entries(parsed).forEach((v) => {
        if (v[0] in this.props.query) {
          this.props.updateQueryParameter(v[0], v[1]);
        }
      });

      this.props.requestFilms(true);
    }
  }

  render() {
    if (!this.props.fetchedFilms) {
      return (
        <div className={classes.noResults}>
          <p>Films not found</p>
        </div>
      );
    }

    return (
      <div data-selector="search-results" className={classes.SearchResults}>
        {this.props.fetchedFilms
          .map(val => (<SearchResult
            film={val}
            key={val.id}
            clicked={(id) => {
              this.props.history.push(`/movies/${id}`);
              this.props.getFilmById(id);
            }}
          />))
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    query: state.query,
    fetchedFilms: state.fetchedFilms.data,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: () => dispatch(actions.requestFilms()),
    getFilmById: id => dispatch(actions.getFilmById(id)),
    updateQueryParameter: (param, value) => dispatch(actions.updateQueryParameter(param, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults));
