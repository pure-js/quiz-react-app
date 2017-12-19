const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MinifyPlugin(),
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
