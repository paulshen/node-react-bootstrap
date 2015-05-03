module.exports = {
  entry: {
    index: 'entry/index'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: 'app/public/js/',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'},
      {test: /zepto[a-z.]*.js/, loader: 'exports-loader?Zepto'},
      {test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  resolve: {
    alias: {
      zepto$: 'vendor/zepto.min.js'
    },
    root: [__dirname + '/app/client_src']
  }
};
