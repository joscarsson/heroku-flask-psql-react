module.exports = {
  entry: './web-client/app.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 5001
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
