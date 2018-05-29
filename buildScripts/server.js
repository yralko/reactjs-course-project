const path = require('path');
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
const app = express();
const port = 3001;

process.env.NODE_ENV = 'development';

app.use('/assets', express.static(path.join(__dirname, '../dist/public')));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.listen(port, () => open(`http://localhost:${port}`));
