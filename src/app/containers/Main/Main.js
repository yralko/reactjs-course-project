import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import classes from './index.css';


export const Main = () => (
  <div className={classes.Main}>
    {renderRoutes(Routes)}
  </div>
);

export const mapStateToProps = (store) => {
  return {
    fetchedFilms: store.fetchedFilms,
  };
};

export default connect(mapStateToProps)(Main);
