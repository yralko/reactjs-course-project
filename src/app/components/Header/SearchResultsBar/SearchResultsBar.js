import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './index.css';


class SearchResultsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'release_date',
      sortOrder: 'desc',
    };
  };

  fetchSortedFilms(criterion) {
    if(!this.props.fetchedFilms.total) return;

    this.setState({
      sortBy: criterion,
    });

    const params = `${Object.entries(this.state)
      .map(val => `${val[0]}=${val[1]}`)
      .join('&')}
      &${this.props.searchParams}`;

      this.props.requestFilms(params);
  }

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
            onClick={() => this.fetchSortedFilms('release_date')}
          >
            release date
          </button>
          <button
            className={classes.sortOptions}
            onClick={() => this.fetchSortedFilms('vote_average')}
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
    searchParams: state.searchParams,
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: params => dispatch(actions.requestFilms(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsBar);
