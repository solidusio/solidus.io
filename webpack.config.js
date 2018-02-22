const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = {
  //Entry points(js, scss files)
  entry: {
    "common": './source/assets/javascripts/common.js',
    "site": './source/assets/stylesheets/site.scss',
    "vendor": ["jquery", "bootstrap"],
  },
  output: {
    path: __dirname + '/.tmp/assets/javascripts',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new Clean(['.tmp/assets']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      bootstrap: 'bootstrap'
    }),
    new CopyWebpackPlugin([
      {from: __dirname + '/source/assets/images', to: __dirname + '/.tmp/assets/images'}
    ]),
    new ExtractTextPlugin({ // define where to save the file
      filename: '../stylesheets/site.css',
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
  ],
  devtool: 'eval-source-map'
};
