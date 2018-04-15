import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App/App';
import reducers from './app/store/reducers/reducers';

if (module.hot) {
  module.hot.accept();
}

const store = createStore(reducers);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
