import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Searchbox from './app/components/Header/Searchbox';
import SearchResultsBar from './app/components/Header/SearchResultsBar';
import reducers from './app/store/reducers/reducers';
import './index.css';

if (module.hot) {
  module.hot.accept();
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <div>
      <Searchbox />
      <SearchResultsBar />
    </div>

  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
