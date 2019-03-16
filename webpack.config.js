const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'app/index.module.js'),
  mode: 'development',
  output: {
    filename: 'app.module.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',

  // live server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    hotOnly: true,
    port: 9000,
    // index: 'index.html',
    open: true
  },


  //modules
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ],
      },
    ]
  },



  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular example',
      // favicon: '/',
      minify: true,
      hash: true,
      cache: true,
      template: path.resolve(__dirname, 'app/index.html')
    })
  ]
};