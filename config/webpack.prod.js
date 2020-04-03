const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const webpackOptions = merge(common, {
  mode: 'production',
  entry: {
    app: './src/js/index.js',
    prototype: './src/js/prototype.js',
  },
  devtool: 'source-map',
  plugins: [],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js', // production!
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});

// console.dir(webpackOptions);

module.exports = webpackOptions;
