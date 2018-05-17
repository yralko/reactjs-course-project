import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './index.css';


class SearchResultsBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={classes.SearchResultsBar}>
        <div className="total-found">
          <span>{this.props.fetchedFilms.total} {this.props.fetchedFilms.total === 1 ? 'film' : 'films'} found</span>
        </div>
        <div className="classes.sort-options">
          <span>Sort by </span>
          <button
            className={classes.sortOptions}
            onClick={() => this.props.requestFilms(this.props.query, {param:'sortBy', value: 'release_date'})}
          >
            release date
          </button>
          <button
            className={classes.sortOptions}
            onClick={() => this.props.requestFilms(this.props.query, {param: 'sortBy', value: 'vote_average'})}
          >
            rating
          </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    query: state.query,
    searchParams: state.searchParams,
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: (params, updatedParam) => dispatch(actions.requestFilms(params, updatedParam))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsBar);
