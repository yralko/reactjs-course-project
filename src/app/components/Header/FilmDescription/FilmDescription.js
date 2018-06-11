import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CurrentFilm from './CurrentFilm';
import classes from './index.css';
import * as actions from '../../../store/actions';

export class FilmDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getFilmById(this.props.match.params.id);
  }

  render() {
    return (
      <div className={classes.FilmDescription}>
        <button
          className={classes.returnToSearch}
          onClick={() => {
            this.props.history.push('/movies');
            this.props.returnToSearch()
          }}
        >
          Search
        </button>
        <CurrentFilm />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    fetchedFilms: state.fetchedFilms,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    returnToSearch: () => dispatch(actions.returnToSearch()),
    getFilmById: id => dispatch(actions.getFilmById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilmDescription));
