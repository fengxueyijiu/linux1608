//打包时的配置文件
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "./build/"
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
        },
        {
          test: /\.css/,
          loader: 'style!css'
        },
        {
          test: /\.(jpe?g|png)$/,
          loader: 'file-loader'
        }
      ]
    }
};
