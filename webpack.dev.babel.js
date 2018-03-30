import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

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

const module = {
  rules: [
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
          },
        },
      ],
    },
  ],
};

const config = {
  mode: 'development',
  entry: {
    app: './src/index.jsx',
  },
  plugins,
  module,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.tmp'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: 'dist',
    hot: true,
  },
};

export default config;
