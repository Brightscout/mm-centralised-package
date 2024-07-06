const existingPackage = require('typescript');
const babelLoader = require('babel-loader');
const webpackCLI = require('webpack-cli');

module.exports = {
  typescript: existingPackage,
  'babel-loader': babelLoader,
  'webpack-cli': webpackCLI
};
