const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'index.html'),
    open: true,
    port: '8888',
    hot: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 10240
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'main.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}