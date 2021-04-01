/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]  */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: 'public/',
      },
    ],
  }),
  new HtmlWebpackPlugin({
    template: 'src/index-template.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
];

const config = {
  mode: 'development',
  entry: {
    app: ['./src/index.tsx'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '.tmp'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 7050,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};

module.exports = config;
