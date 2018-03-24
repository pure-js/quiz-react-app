import path from 'path';
import webpack from 'webpack';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


const plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    {
      context: 'static',
      from: '**/*.{png,svg,ico}',
    },
    {
      from: 'manifest.json',
      // to: 'dist',
      toType: 'dir',
    },
  ]),
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
  new webpack.HashedModuleIdsPlugin(),
  new ExtractTextPlugin('styles.[contenthash].min.css'),
  new WorkboxPlugin.GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }),
];

const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
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
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
            },
          },
        ],
      }),
    },
  ],
};

const config = {
  mode: 'production',
  entry: {
    app: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'prismjs',
      'classnames',
      'prop-types',
    ],
  },
  plugins,
  module,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name].[chunkhash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
