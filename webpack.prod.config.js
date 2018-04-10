const webpack = require('webpack');
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}

module.exports = config;
