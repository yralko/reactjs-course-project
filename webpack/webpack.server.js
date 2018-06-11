const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              'stage-0',
              'env',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
};
