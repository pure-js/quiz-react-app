/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]  */
const path = require('path');
const webpack = require('webpack');
const SizePlugin = require('size-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const plugins = [
  new SizePlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: '**/*.{png,svg,ico}',
        to: 'dist'
      },
      {
        from: 'manifest.json',
        to: 'dist',
      },
    ]
  }),
  new HtmlWebpackPlugin({
    template: 'src/index-template.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeScriptTypeAttributes: true,
    },
  }),
  new webpack.ids.HashedModuleIdsPlugin(),
  new MiniCssExtractPlugin({
    filename: '[contenthash].min.css',
    chunkFilename: '[id].[contenthash].min.css',
  }),
  new GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'json',
    generateStatsFile: true,
  }),
];

const moduleWebpack = {
  rules: [
    { test: /\.tsx?$/, loader: 'ts-loader' },
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
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
  ],
};

const config = {
  mode: 'production',
  entry: {
    app: ['./src/index.tsx'],
  },
  plugins,
  module: moduleWebpack,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = config;
