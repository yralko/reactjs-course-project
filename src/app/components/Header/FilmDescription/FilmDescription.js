import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmData from './FilmData';
import FilmPoster from './FilmPoster';
import classes from './index.css';
import * as actions from '../../../store/actions';

class FilmDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedContent;
    if (this.props.fetchedFilms) {
      const currentFilm = this.props.fetchedFilms
        .filter(val => val.id === this.props.selectedFilmId)[0];
      renderedContent = (
        <div className={classes.FilmDescription}>
          <FilmPoster src={currentFilm.poster_path} />
          <FilmData filmData={{
            title: currentFilm.title,
            release_date: currentFilm.release_date,
            duration: currentFilm.runtime,
            overview: currentFilm.overview,
            rating: currentFilm.vote_average,
          }}
          />
        </div>
      );
    } else {
      renderedContent = <p>Loading ...</p>;
    }

    return(
      <div>
        <button onClick={() => this.props.returnToSearchbox()}>Return to searbox</button>
        {renderedContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFilmId: state.selectedFilmId,
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    returnToSearchbox: () => dispatch(actions.returnToSearchbox()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
