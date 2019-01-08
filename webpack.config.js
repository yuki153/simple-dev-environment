const path = require('path');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  //mode: "production",
  mode: "development",
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
    path: path.join(__dirname, 'dist'), // 全体の出力パス(root)
    filename: "js/bundle.js"
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
                      browsers: ['last 2 major versions', '> 1%', ' ie >= 10', 'android >= 4.4']
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
      //{
      //  test: /\.(jpg|png|gif)$/,
      //  use: [
      //      {
      //          loader: 'file-loader',
      //          options: {
      //              //name: '[name].[ext]',
      //              //outputPath : 'img/',
      //              publicPath : '../img/'
      //          }
      //      }
      //  ]
      //},
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ],
              plugins: ['transform-runtime']
            }
          }
        ]
      }, 
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./develop/index.html"
    }),
    new HtmlBeautifyPlugin({
      config: {
          html: {
              end_with_newline: true,  // 出力の最後に改行させる
              indent_size: 4,          // indent space4
              indent_with_tabs: false, // tab false
              preserve_newlines: true, // 改行維持
              extra_liners: '',        // 終了タグの後に空白行を挿入する要素のリスト
              unformatted: ['p', 'li', 'i', 'b', 'span', 'img', 'a'] // beautyしない
          }
      },
      replace: [ ' type="text/javascript"' ]
    }),
    new ExtractTextPlugin('css/bundle.css'),
    new CopyWebpackPlugin([{
      from: 'develop/img/',
      to: 'img/',
      context: './'
    }]),
    new ImageminPlugin({
      test: 'img/**',
      optipng: {
        optimizationLevel: 3
      },
      pngquant: {
        quality: '95-100',
        speed: 1
      },
      jpegtran: {
        progressive: true
      }
    })
  ]
}