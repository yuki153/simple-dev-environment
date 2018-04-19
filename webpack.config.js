const path = require('path');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  // メインのJS
  //entry: "./develop/js/main.js",
  entry: {
      script: "./develop/js/main.js"
      //style: "./develop/scss/main.scss"
  },

  // ソースマップ出力
  devtool: 'source-map',
    
  // 出力ファイル
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
    //globalObject: 'this'
  },
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
        // Sassファイルの読み込みとコンパイル
            // linkタグに出力する機能
            fallback: 'style-loader',
            use: [
              // CSSをバンドルするための機能
              {
                loader: 'css-loader',
                options: {
                  // CSS内のurl()メソッドの取り込みを禁止する
                  url: false,
                  // ソースマップの利用有無
                  sourceMap: true,
                  // 空白文字やコメントを削除する
                  minimize: false,
                  // Sass+PostCSSの場合は2を指定
                  importLoaders: 2
                },
              },
              // PostCSSのための設定
              {
                loader: 'postcss-loader',
                options: {
                  //ident: 'postcss',
                  // PostCSS側でもソースマップを有効にする
                  sourceMap: true,
                  plugins: [
                    // Autoprefixerを有効化
                    // ベンダープレフィックスを自動付与する
                    require('autoprefixer')({
                      browsers: ['last 2 major versions', ' ie >= 10', 'android >= 4.4', 'iOS >= 9']
                    })
                  ]
                },
              },
              // Sassをバンドルするための機能
              {
                loader: 'sass-loader',
                options: {
                  // ソースマップの利用有無
                  sourceMap: true,
                  outputStyle: 'expanded'
                }
              }
            ]
        }),
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./develop/index.html"
    }),
    new ExtractTextPlugin('bundle.css')
  ]
}