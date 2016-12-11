var path = require('path');
var webpack=require('webpack');
module.exports = {
    entry:[
       path.resolve(__dirname, 'src/index.js'),
      'webpack/hot/dev-server'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "/build/"
    },
    devServer: {
      stats: { colors: true },
      port: 3000,
      inline: true,
      hot:true
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
    devtool: 'eval',
    plugins:[
      new webpack.HotModuleReplacementPlugin()
    ],
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
