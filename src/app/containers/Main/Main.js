import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../../components/SearchResults';
import classes from './index.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedContent;

    if(this.props.fetchedFilms) {
      renderedContent = <SearchResults />;
    } else {
      renderedContent = <h1>Films not found</h1>;
    }

    return (
      <div className={classes.Main}>
        {renderedContent}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    fetchedFilms: store.fetchedFilms,
  }
}

export default connect(mapStateToProps)(Main);
