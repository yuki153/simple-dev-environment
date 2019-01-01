# Simple Dev Environment

## 概要
webpack による簡易な開発環境の構築  
`build` することにより下記が行われます。

* ES6 は ES5 へ変換されます。ES modules機能の使用も可能
* scss は css へと変換され、prefix も設定に応じて自動で付与されます
* img は設定に応じて圧縮されます

## 使用方法
下記コマンドをターミナルで打ちます

1. `yarn`（初回のみ）
2. `yarn serve`（開発環境の立ち上げ）
3. `yarn build`（コンパイル後のファイル群を格納した dist ディレクトリを生成する）

## 編集ファイル

**html, scss, js, img ファイルの編集**  
”develop/” 配下の各ファイル

**設定ファイルの編集**  
webpack.config.js 

### 補足

編集する html ファイルを複数にしたり、  
webpack の entry となる js ファイルを増やしたい場合には  
webpack.config を編集する必要があります

### 参考にしたリンク集

* [最新版で学ぶwebpack 4入門 babel編](https://ics.media/entry/16028)
* [最新版で学ぶwebpack 4入門 CSS/SASS編](https://ics.media/entry/17376)
* [gulpで始めるwebpack 4入門_Qiita](https://qiita.com/tonkotsuboy_com/items/2d4f3862e6d05dc0bea1)
* [webpack と HTML と CSS_Qiita](https://qiita.com/gcnishino/items/65817a4b545647a220c9)
* [webpack で htmlファイルも出力](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)
* [なんとなくで理解しないWebpackのCSS周辺](https://qiita.com/terrierscript/items/0574ab1ef358fecb55b9)
* [autoprefixer7からの変更点](https://evilmartians.com/chronicles/autoprefixer-7-browserslist-2-released)
* [issue:Webpack 4 CSS extract issue_github](https://github.com/webpack/webpack/issues/6687#issuecomment-370779066)
* [issue:Entry chunks for .css files also creating .js files_github](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/518)
