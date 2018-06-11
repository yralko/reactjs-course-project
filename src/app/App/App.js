// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Router } from 'react-router-dom';
// import history from './app/router/history';
// import { persistor, store } from './app/store/store';
// persistor.persist();
//
// const app = (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <Router history={history}>
//         <App />
//       </Router>
//     </PersistGate>
//   </Provider>
// );


import React from 'react';
import ErrorBoundary from '../auxilliary/ErrorBoundary';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import classes from './index.css';

export const App = () => {
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
