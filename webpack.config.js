/* eslint-disable no-undef */
require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: path.join(__dirname, 'src', 'App.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpe?g|png|gif|mp3|svg|ico)$/,
          use: {
            loader: 'file-loader',
            options: {},
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
        })
      ],
  };
};
