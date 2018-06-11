import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import store from '../store/store';
import App from '../App';
import './index.css';

const Root = (props) => {
  const { Router } = props;

  let history

  if (typeof document !== 'undefined') {

    history = createHistory()
  }

  return (
    <Provider store={store}>
      <Router history={history}>
         <App />
       </Router>
    </Provider>
  );
};

export default Root;
