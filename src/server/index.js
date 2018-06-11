import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from '../app/Root';
import { PORT, htmlMarkup } from '../helper';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const context = {};

  const renderedReactApp = renderToString(<Root
    Router={StaticRouter}
    options={{
      location: req.url,
      context,
    }}
  />);

  const html = htmlMarkup(renderedReactApp);

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
