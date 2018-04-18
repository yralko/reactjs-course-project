import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import classes from './index.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
