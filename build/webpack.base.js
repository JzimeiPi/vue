const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: '/src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
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
      // template: path.join(__dirname, '/main.html'), //ERROR in Entry module not found: Error: Can't resolve '/Users/gq/Documents/vue/build/main.html' in '/Users/gq/Documents/vue'
      template: '/main.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}