import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paginationSet: 0,
      maxPaginationLength: 8,
    };
  }

  nextPaginationSet() {
    const {limit} = this.props.fetchedFilms;

    this.setState({
      paginationSet: this.state.paginationSet + this.state.maxPaginationLength,
    });
  }

  render() {
    if(!this.props.fetchedFilms.total) return null;
    const { offset, total, limit } = this.props.fetchedFilms;

    const totalPages = Math.floor(total / limit);

    const paginationList = new Array(this.state.maxPaginationLength).fill(1)
    .map((val, index) => {
      const newOffset = (this.state.paginationSet + index) * limit;

      return (
        <li
          onClick={() => this.props.requestFilms({param: 'offset', value: newOffset})}
          style={offset / limit === this.state.paginationSet + index ? {color: 'red'} : null }
        >
          {this.state.paginationSet + index + 1}
        </li>
      )
    })

    return (
      <div>
        <span>previous</span>
        <ul>
          {paginationList}
        </ul>
        <span onClick={() => this.nextPaginationSet()}>next</span>
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
