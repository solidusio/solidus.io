const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  // Entry points(js, scss files)
  entry: {
    "extensions": './source/assets/javascripts/extensions.js',
    "common": './source/assets/javascripts/common.js',
    "site": './source/assets/stylesheets/site.scss',
    "vendor": ["jquery", "bootstrap"],
  },
  plugins: [
    new CleanWebpackPlugin({
      // Add '.tmp/assets' to the default value used by the plugin
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*', '!directoryToExclude/**', '.tmp/assets']
    }),
    new MiniCssExtractPlugin({
      filename: '../stylesheets/site.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: __dirname + '/source/assets/javascripts/vendor', to: __dirname + '/.tmp/assets/javascripts'},
        {from: __dirname + '/source/assets/images', to: __dirname + '/.tmp/assets/images'}
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      headroom: 'headroom.js'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    // grid: true
                  })
                ],
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './source/assets/fonts/[name].[ext]',
              outputPath: '/assets/fonts'
            }
          }
        ],
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  resolve: {
    modules: ['node_modules']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '/.tmp/assets/javascripts'),
  },
};
