require('babel-loader');

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
          stage: 0
        }
      },
      {test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  resolve: {
    alias: {
    },
    root: [__dirname + '/app/client_src']
  }
};
