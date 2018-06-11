import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import FilmData from '../FilmData';
import FilmPoster from '../FilmPoster';
import classes from './index.css';

export class CurrentFilm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentFilm) {
      return null;
    } else {
      return (
        <div className={classes.CurrentFilm}>
           <FilmPoster
             src={this.props.currentFilm.poster_path}
             alt={this.props.currentFilm.title}
           />
           <FilmData
             filmData={{
               title: this.props.currentFilm.title,
               release_date: this.props.currentFilm.release_date,
               duration: this.props.currentFilm.runtime,
               overview: this.props.currentFilm.overview,
               rating: this.props.currentFilm.vote_average,
               genres: this.props.currentFilm.genres,
             }}
           />
         </div>
      );
    }
  }
}


export const mapStateToProps = (state) => {
  return {
    currentFilm: state.currentFilm,
  }
}

export default connect(mapStateToProps)(withRouter(CurrentFilm));
