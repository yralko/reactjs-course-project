import React, { Component } from 'react';
import ErrorBoundary from '../auxilliary/ErrorBoundary';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import SearchResult from '../components/SearchResults/SearchResult';
import classes from './index.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <Main />
          <SearchResult />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
