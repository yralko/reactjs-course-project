import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Test from './Test';
import { PORT, htmlMarkup } from '../helper';

const app = express();

const renderedReactApp = renderToString(<Test router={StaticRouter} />);
const html = htmlMarkup(renderedReactApp);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
