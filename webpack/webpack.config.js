const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry:'./src/main.js',
  output:{
    path : path.resolve(__dirname,'./dist'),
    filename:'bundle.js',
    // publicPath:'./'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:8192,
              name:'img/[name][hash:8].[ext]',
              publicPath:''
            }
          }
        ]
      },
      {
        test:/\.less$/,
        use:[{
          loader:"style-loader"
        },{
          loader:"css-loader"
        },{
          loader:"less-loader"
        }
      ]
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader']
      }
    ]
  },
  resolve:{
    // 别名
    // 指定对应的版本
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归xiaolu所有'),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
    
  ]
}