import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Pagination = (props) => {
  if(!props.fetchedFilms.total) return null;


  const { limit, total, offset } = props.fetchedFilms;
  const totalPages = Math.floor(total / limit);
  const renderedList = new Array(totalPages >= 7 ? 7 : totalPages)
    .fill(1)
    .map((val, index) => (
      <span
        key={offset + index}
        onClick={() => props.requestFilms({param: 'offset', value: offset + index})}
      >
        {offset + index + 1}
      </span>
    ))

  return (
    <div>
      { offset > 0 ? <span>...</span> : null }
      {renderedList}
      {offset + 7 < totalPages ? <span>...</span> : null }
    </div>
  );
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
