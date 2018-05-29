import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import InitialPage from './InitialPage';
import ResultsPage from './ResultsPage';
import FourOhFour from './FourOhFour';
import classes from './index.css';


export const Main = () => (
  <div className={classes.Main}>
    <Switch>
      <Route exact path='/' component={InitialPage} />
      <Route path='/movies' component={ResultsPage} />
      <Route path='/movies/:id' component={InitialPage} />
      <Route path='*' component={FourOhFour} />
    </Switch>
  </div>
);

export const mapStateToProps = (store) => {
  return {
    fetchedFilms: store.fetchedFilms,
  };
};

export default connect(mapStateToProps)(Main);
