const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'index.html'),
    open: true,
    port: '8888',
    hot: true
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(baseConfig, devConfig)