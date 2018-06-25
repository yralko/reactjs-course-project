import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from '../App';
import './index.css';

const Root = (props) => {
  const { Router, options } = props;

  return (
    <Provider store={store}>
      <Router {...options}>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;
