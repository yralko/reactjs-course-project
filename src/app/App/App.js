import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ErrorBoundary from '../auxilliary/ErrorBoundary';
import * as actions from '../store/actions';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import classes from './index.css';

class App extends Component {

  componentDidMount() {
    axios.get('http://react-cdp-api.herokuapp.com/movies/')
      .then(res => this.props.storeFetchedFilms(res.data.data));
  }

  render() {
    return (
      <div className={classes.App}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeFetchedFilms: allFilms => dispatch(actions.storeFetchedFilms(allFilms)),
  };
};

export default connect(null, mapDispatchToProps)(App);
