const path = require('path');
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const compiler = webpack(webpackConfig);
const app = express();

const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, () => open(`http://localhost:${port}`));
