import React from 'react';
import { connect } from 'react-redux';
import CurrentFilm from './CurrentFilm';
import classes from './index.css';
import * as actions from '../../../store/actions';

export const FilmDescription = props => (
  <div>
    <button
      className={classes.returnToSearch}
      onClick={() => props.returnToSearch()}
    >
      Search
    </button>
    <CurrentFilm />
  </div>
);

export const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    returnToSearch: () => dispatch(actions.returnToSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
