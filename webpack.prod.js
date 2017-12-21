const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'prismjs',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new MinifyPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index-template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ],
  output: {
    filename: '[name].[chunkhash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
};
