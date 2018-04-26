import React from 'react';
import { connect } from 'react-redux';
import SearchResults from '../../components/SearchResults';
import classes from './index.css';

const Main = (props) => {
  let renderedContent;

  if (props.fetchedFilms) {
    renderedContent = <SearchResults />;
  } else {
    renderedContent = <h1>Films not found</h1>;
  }

  return (
    <div className={classes.Main}>
      {renderedContent}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    fetchedFilms: store.fetchedFilms,
  };
};

export default connect(mapStateToProps)(Main);
