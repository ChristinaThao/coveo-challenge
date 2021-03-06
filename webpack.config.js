const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const Dotenv = require('dotenv-webpack');
  
  module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }]
    },
    node: {
      fs: 'empty'
    },
    devServer: {
      contentBase:  path.resolve(__dirname, 'dist'),
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html" //source html
      }),
      new Dotenv()
    ]
  };