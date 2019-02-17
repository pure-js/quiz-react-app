const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new CopyWebpackPlugin([
    {
      from: 'manifest.json',
    },
  ]),
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
        test: /\.tsx?$/, loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre', test: /\.js$/, loader: 'source-map-loader',
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
    contentBase: 'dist',
    port: 7050,
    hot: true,
    open: true,
    historyApiFallback: true,
    // https: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

module.exports = config;
