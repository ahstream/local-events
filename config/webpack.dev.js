const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['./src/js/index.js', 'webpack-hot-middleware/client?reload=true'],
    prototype: ['./src/js/prototype.js', 'webpack-hot-middleware/client?reload=true'],
  },
  devtool: 'cheap-module-eval-source-map', // or 'inline-source-map'
  devServer: {
    openPage: process.env.PROTOTYPE ? 'prototype.html' : '',
    // contentBase properties below needed to get hot reload when templates change!
    contentBase: './src/templates',
    watchContentBase: true,
    hot: true,
  },
  plugins: [],
  output: {
    filename: '[name].bundle.js', // development!
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '',
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
});
