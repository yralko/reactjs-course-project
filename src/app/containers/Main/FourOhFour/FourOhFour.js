import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './index.css';

const InitialPage = () => (
  <div className={classes.pageNotFound}>
    <h1>  404 </h1>
    <h3>The page you request does not exist</h3>
  </div>
)

export default withRouter(InitialPage);
