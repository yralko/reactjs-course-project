import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { concatQueryParams } from '../../../helper';
import classes from './index.css';
import * as actions from '../../store/actions';

const PAGINATION_LENGTH = 8;

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  changePaginationSet(direction) {
    let newIndex;

    switch (direction) {
      case 'next':
        newIndex = this.props.paginationIndex + PAGINATION_LENGTH;
        break;
      case 'previous':
        newIndex = this.props.paginationIndex - PAGINATION_LENGTH;
        break;
      default:
        return;
    }

    this.props.changePaginationIndex(newIndex);
  }

  render() {
    if (!this.props.fetchedFilms.total) return null;

    const { offset, total, limit } = this.props.fetchedFilms;
    const totalPages = Math.ceil(total / limit);
    const remainingPages = totalPages - this.props.paginationIndex;
    const currentPaginationLength = remainingPages > PAGINATION_LENGTH
      ? PAGINATION_LENGTH
      : remainingPages;

    const paginationList = new Array(currentPaginationLength).fill(1)
    .map((val, index) => {
      const currentItemNumber = this.props.paginationIndex + index;
      const newOffset = currentItemNumber * limit;

      if (currentItemNumber > totalPages) return null;

      return (
        <li
          key={index}
          onClick={() => {
            this.props.updateQueryParameter('offset', newOffset);
            this.props.requestFilms();
            const params = concatQueryParams(this.props.query);
            this.props.history.push(`/movies?${params}`);
          }}
          className={offset / limit === currentItemNumber ? classes.active : null }
        >
          {this.props.paginationIndex + index + 1}
        </li>
      )
    })

    return (
      <div className={classes.Pagination}>
        { this.props.paginationIndex > 0
          && <span onClick={() => this.changePaginationSet('previous')}>previous</span> }
        <ul>
          {paginationList}
        </ul>
        { this.props.paginationIndex < totalPages - PAGINATION_LENGTH
          && <span onClick={() => this.changePaginationSet('next')}>next</span> }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms,
    paginationIndex: state.paginationIndex,
    query: state.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: updatedParam => dispatch(actions.requestFilms(updatedParam)),
    changePaginationIndex: index => dispatch(actions.changePaginationIndex(index)),
    updateQueryParameter: (parameter, value) => dispatch(actions.updateQueryParameter(parameter, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pagination));
