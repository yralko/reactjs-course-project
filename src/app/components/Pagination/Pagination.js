import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './index.css';
import * as actions from '../../store/actions';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paginationSet: 0,
      maxPaginationLength: 8,
    };
  }

  previousPaginationSet() {
    this.setState({
      paginationSet: this.state.paginationSet - this.state.maxPaginationLength,
    })
  }

  nextPaginationSet() {
    this.setState({
      paginationSet: this.state.paginationSet + this.state.maxPaginationLength,
    });
  }

  render() {
    if (!this.props.fetchedFilms.total) return null;

    const { offset, total, limit } = this.props.fetchedFilms;
    const totalPages = Math.floor(total / limit);
    const currentPaginationLength = totalPages > this.state.maxPaginationLength
      ? this.state.maxPaginationLength
      : totalPages;

    const paginationList = new Array(currentPaginationLength).fill(1)
    .map((val, index) => {
      const currentItemNumber = this.state.paginationSet + index;
      const newOffset = currentItemNumber * limit;

      if (currentItemNumber > totalPages) return null;

      return (
        <li
          key={index}
          onClick={() => this.props.requestFilms({param: 'offset', value: newOffset})}
          className={offset / limit === currentItemNumber ? classes.active : null }
        >
          {this.state.paginationSet + index + 1}
        </li>
      )
    })

    return (
      <div className={classes.Pagination}>
        { this.state.paginationSet > 0
          && <span onClick={() => this.previousPaginationSet()}>previous</span> }
        <ul>
          {paginationList}
        </ul>
        { this.state.paginationSet < totalPages - this.state.maxPaginationLength
          && <span onClick={() => this.nextPaginationSet()}>next</span> }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: updatedParam => dispatch(actions.requestFilms(updatedParam)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
