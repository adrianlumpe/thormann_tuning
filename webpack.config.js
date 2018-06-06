const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlPluginRemove = require('html-webpack-plugin-remove');

const VendorCSS = new ExtractTextPlugin('./assets/css/vendor.[contenthash:8].css');
const CustomCSS = new ExtractTextPlugin('./assets/css/main.[contenthash:8].css');

module.exports = {
  entry: {
    head: './user/themes/alice/source/js/head.js',
    footer: './user/themes/alice/source/js/footer.js'
  },
  output: {
    filename: 'assets/js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'user/themes/alice'),
    publicPath: '/user/themes/alice/'
  },
  module: {
    rules: [
      {
        test: /vendor.sass$/,
        use: VendorCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                url: false // don't parse image URLs in CSS files
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /main.sass$/,
        use: CustomCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                url: false // don't parse image URLs in CSS files
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['user/themes/alice/assets/css/*.*', 'user/themes/alice/assets/js/*.*']),
    VendorCSS,
    CustomCSS,
    new HtmlWebpackPlugin({
      template: './user/themes/alice/source/twig/head.html.twig',
      filename: './templates/partials/head.html.twig',
      chunks: ['head']
    }),
    new HtmlWebpackPlugin({
      template: './user/themes/alice/source/twig/footer.html.twig',
      filename: './templates/partials/footer.html.twig',
      chunks: ['footer']
    }),
    new HtmlPluginRemove(/<script.*?src=".*?\/head\..*?\.js".*?<\/script>/)
  ]
};