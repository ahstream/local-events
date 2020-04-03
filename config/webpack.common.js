const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // cannot exclude node_modules because normalize.css need to be loaded from there!
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/templates/index.html'),
      chunks: ['app'],
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      filename: 'prototype.html',
      template: path.resolve(__dirname, '../src/templates/prototype.html'),
      chunks: ['prototype'],
      scriptLoading: 'defer',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: 'public', to: 'public' },
    ]),
  ],
};
