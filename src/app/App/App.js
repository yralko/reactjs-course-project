import React from 'react';
import ErrorBoundary from '../auxilliary/ErrorBoundary';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import classes from './index.css';

export const App = () => {
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
};

export default App;
