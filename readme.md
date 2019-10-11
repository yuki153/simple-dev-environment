# Simple Dev Environment

## 概要

webpack による簡単な開発環境。  
この開発環境の使用により作業ファイルは下記のようにコンパイルされます。

* 最新のEcmaScript は ES5 へ変換されます。ES modules 機能の使用も可能
* ES5 以降に実装された新しい関数なども使用できます。（Promise など）
* scss は css へと変換され、prefix も設定に応じて自動で付与されます
* img は設定に応じて圧縮されます

## 使用方法

下記コマンドをターミナルで打ちます。

1. `yarn`（初回のみ）
2. `yarn serve`（開発環境の立ち上げ）
3. `yarn build`（コンパイル後のファイル群を格納した dist ディレクトリを生成する）

## ディレクトリ

```bash
.
├── develop # 開発用ディレクトリ
│   ├── img
│   │   ├── test_img01.png
│   │   ├── test_img02.png
│   │   └── test_img03.png
│   ├── index.html
│   ├── js
│   │   ├── main.js # webpack の bundle の起点となる js
│   │   └── test.js # export sample file
│   └── scss
│       └── main.scss
├── dist # yarn build コマンドにより生成
│   ├── css
│   │   ├── bundle.css
│   │   └── bundle.css.map
│   ├── img
│   │   ├── test_img01.png
│   │   ├── test_img02.png
│   │   └── test_img03.png
│   ├── index.html
│   └── js
│       └── bundle.js
├── package.json
├── readme.md
├── webpack.config.js # 開発環境の設定ファイル
└── yarn.lock
```

### 補足

scss ファイルを css へコンパイルするために、  
webpack の build の起点となる main.js では scss ファイルも import する必要がある。  
main.js を通して webpack の処理が行われるため。

## 参考リンク集

* [最新版で学ぶwebpack 4入門 babel編](https://ics.media/entry/16028)
* [最新版で学ぶwebpack 4入門 CSS/SASS編](https://ics.media/entry/17376)
* [webpack と HTML と CSS_Qiita](https://qiita.com/gcnishino/items/65817a4b545647a220c9)
* [webpack で htmlファイルも出力](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)
* [なんとなくで理解しないWebpackのCSS周辺](https://qiita.com/terrierscript/items/0574ab1ef358fecb55b9)
* [autoprefixer7からの変更点](https://evilmartians.com/chronicles/autoprefixer-7-browserslist-2-released)
* [issue:Webpack 4 CSS extract issue_github](https://github.com/webpack/webpack/issues/6687#issuecomment-370779066)
* [issue:Entry chunks for .css files also creating .js files_github](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/518)
