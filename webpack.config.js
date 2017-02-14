var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// Bundle entry point
var entry = ['./components/App.jsx'];

// Bundle target
var target = "web";

// Bundle output
var output = {
  path: __dirname,
  filename: 'article.js'
};

// Necessary webpack loaders for converting our content:
var webpackLoaders = [
  'babel-loader',
  'eslint-loader',
  __dirname + '/lib/latex-loader',
  __dirname + '/lib/pre-loader',
  __dirname + '/lib/p-loader'
];

var plugins = [];

// Dev mode: make certain concessions to speed up dev work.
if(process.argv.indexOf("--prod") === -1 && process.argv.indexOf("--lint")) {
  // allow code in textareas when in dev mode:
  webpackLoaders.push(__dirname + '/lib/textarea-loader');
}

// Prod mode: make sure to minify the bundle
else if(process.argv.indexOf("--prod") > -1) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

console.log("content for entry:", entry);

// And the final config that webpack will read in.
module.exports = {
  entry:  entry,
  target: target,
  output: output,
  module: {
    loaders: [
      {
        test: /\.(png|gif)$/,
        loader: "file?name=images/packed/[hash].[ext]"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /.jsx?$/,
        include: [
          /components/,
          /lib.site/,
          /locales/
        ],
        loaders: webpackLoaders
      }
    ]
  },
  plugins: plugins
};
