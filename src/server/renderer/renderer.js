import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../../app/App';


export default (req, store, context) => {
  const root = (
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>
  );

  const content = renderToString(root); 

  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The HTML5 Herald</title>
    <base href="/" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root">${content}</div>
    <script>window.INITIAL_STATE = ${JSON.stringify(store.getState())}</script>
    <script src="bundle.js"></script>
  </body>
  </html>
  `;
};
