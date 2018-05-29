// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import App from './app/App';
// import { persistor, store } from './app/store/store';
// import './index.css';
// import ErrorBoundary from './app/auxilliary/ErrorBoundary';
//
// if (module.hot) {
//   module.hot.accept();
// }
//
// persistor.persist();
//
// const app = (
//
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App></App>
//         </PersistGate>
//   </ErrorBoundary>
// </Provider>
//
// );
//
// ReactDOM.render(app, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './app/App';
import history from './app/router/history';
import { persistor, store } from './app/store/store';
import './index.css';

if (module.hot) {
  module.hot.accept();
}

persistor.persist();

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
