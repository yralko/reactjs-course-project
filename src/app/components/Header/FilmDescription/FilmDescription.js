import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmData from './FilmData';
import FilmPoster from './FilmPoster';
import classes from './index.css';

class FilmDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedContent = null;
    if (this.props.fetchedFilms) {
      const currentFilm = this.props.fetchedFilms.filter(val => val.id === this.props.selectedFilm)[0];
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
        {renderedContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm,
    fetchedFilms: state.fetchedFilms,
  };
};

export default connect(mapStateToProps)(FilmDescription);
