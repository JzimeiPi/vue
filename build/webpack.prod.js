const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production'
}
module.exports = merge(baseConfig, prodConfig)