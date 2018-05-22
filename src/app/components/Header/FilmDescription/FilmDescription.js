import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../Loader';
import CurrentFilm from './CurrentFilm';
import classes from './index.css';
import * as actions from '../../../store/actions';

export const FilmDescription = props => (
  <div>
    <button
      className={classes.returnToSearch}
      onClick={() => props.toggleFilmSelection(true)}
    >
      Search
    </button>
    { props.fetchedFilms ? <CurrentFilm /> : <Loader /> }
  </div>
);

export const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilmSelection: bool => dispatch(actions.toggleFilmSelection(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
