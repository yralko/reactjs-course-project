import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app/App';
import { persistor, store, testStore } from './app/store/store';
import './index.css';
import ErrorBoundary from './app/auxilliary/ErrorBoundary';

if (module.hot) {
  module.hot.accept();
}

persistor.persist();

const app = (

  <ErrorBoundary>
    <Provider store={testStore}>
        <Router>
          <PersistGate loading={null} persistor={persistor}>
            <Route exact path='/' component={App} />
          </PersistGate>
        </Router>
    </Provider>
  </ErrorBoundary>

);

ReactDOM.render(app, document.getElementById('root'));
