'use strict';
require('babel-loader');
require('babel-preset-es2015');
require('babel-preset-react');
require('css-loader');
require('style-loader');
require('autoprefixer-loader');
require('exports-loader');
require('imports-loader');
require('whatwg-fetch');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: 'App'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: 'app/public/js/',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015'],
        }
      },
      {test: /\.css/, loader: 'style!css!autoprefixer'},
      {test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  resolve: {
    alias: {
    },
    root: [__dirname + '/app/client_src']
  }
};
