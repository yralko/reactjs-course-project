import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import Main from '../containers/Main/Main';
import Footer from '../components/Footer/Footer';
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
