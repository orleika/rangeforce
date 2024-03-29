# rangeforce

> Rangeforce inc, teaser page

## Install

このプロジェクトではビルドに[Node.js](https://nodejs.org/)を使用しています．次のコマンドを実行することで最新のNode.jsをインストールし，必要なライブラリをインストールします．

```
$ ./setup.sh
```

もちろん，Node.jsのインストールはパッケージ管理ソフトを用いても構いません．その場合は`setup.sh`においてNode.jsのインストールがスキップされます．

## Workflow

`src`ディレクトリのファイルを修正し，npmコマンドを用いてビルドを実行，`dist`ディレクトリに出力されたものをWebサーバに配置するというのが作業手順となります． `dist`ディレクトリはgitの管理対象外なので直接修正を行わないでください．

`dist`ディレクトリが無い状態の場合は`npm run release`を実行してください．ライブラリを含む必要なすべてのリソースが出力されます．  

修正作業中は`npm run watch`コマンドを利用することで`src`ディレクトリ内のファイルの変更を監視し自動でビルドを行うことができます．ライブラリの配置は行いません．具体的な監視ファイルについては`gulpfile.babel.js`を参照してください．

すべての修正が完了したら，gitにコミットしてください．`npm run release`コマンドを実行することで`dist`ディレクトリにビルド成果物を出力します．

## License

© 2016-2017 Rangeforce, inc.
