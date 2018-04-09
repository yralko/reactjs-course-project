const path = require('path');
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);
const app = express();

const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.use(middleware(compiler));

app.listen(port, () => open(`http://localhost:${port}`));
