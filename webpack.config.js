global.Promise         = require('bluebird');

var webpack            = require('webpack');
var path               = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var publicPath         = 'http://localhost:8050/public/assets';
var jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

const HtmlPlugin = require('html-webpack-plugin');
const extractHtml = new HtmlPlugin({template: 'index.html'});

var plugins = [
  new ExtractTextPlugin("styles.css"),
  new webpack.LoaderOptionsPlugin({
       debug: true
     })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin([ 'public/assets/' ], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  );
  plugins.push(new webpack.optimize.DedupePlugin());
}

plugins.push(extractHtml);

module.exports = {
  entry: ['babel-polyfill','./client.js'],
  //debug: process.env.NODE_ENV !== 'production',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/public/assets/`,
    filename: jsName,
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: [
                "css-loader"
            ],
            fallback: "style-loader",
        })
      },
      // { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      // { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.jsx?$/, loader: ['babel-loader'], exclude: [/node_modules/, /public/] },
      { test: /\.json$/, use: 'json-loader' },
    ]
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};