var path = require('path');
var webpack=require('webpack');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loader: 'babel-loader'
        }
      ]
    },
  devServer: {
    publicPath: "/build/",
    stats: { colors: true },
    port: 8080,
    inline: true,
    hot:true
  },
  resolve: {
  extensions: ["", ".js", ".jsx"],             //不写resolve的话，会解析不到'.jsx',但能解析到'.js'(写路径时省掉后缀'.js','.jsx')
  },
  devtool: 'eval',
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};
