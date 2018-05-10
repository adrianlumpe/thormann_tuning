const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const CustomCSS = new ExtractTextPlugin('./assets/css/custom.css');

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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['user/themes/alice/assets/css/*.*', 'user/themes/alice/assets/js/*.*']),
    new ExtractTextPlugin('./assets/css/vendor.[contenthash:8].css')
  ]
};