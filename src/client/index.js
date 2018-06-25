import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import reducer from '../app/store/reducers/reducers';
import store from '../app/store/store'
import App from '../app/App';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


hydrate(app, document.getElementById('root'));
