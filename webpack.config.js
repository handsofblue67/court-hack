var fs = require('fs')
var jshintrc = JSON.parse(fs.readFileSync('./.jshintrc', 'utf8'))
module.exports = {
    entry: "./ui/entry.js",
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.html$/, loader: 'html-loader' },
          {
            test: /\.js$/,
            exclude: [/vendors/, /node_modules/],
            loaders: [
              'nginjector-loader',
              'babel-loader',
              'jshint-loader'
            ]
          },
        ]
    },

    jshint: jshintrc,
    devtool: 'source-map',
};
