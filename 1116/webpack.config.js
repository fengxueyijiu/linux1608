var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
      publicPath: "/static/",
      stats: { colors: true },
      port: 3000,
      inline: true
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loader: 'babel-loader'
        }
      ]
    }
};
