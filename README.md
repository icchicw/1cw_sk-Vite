# 1cw_sk-vite
- これは静的サイト用Vite環境です
- sass関数使用例はsrc > scss > object > project > _p-sass-function.scss
- special thanks!! サカタさん[@sakata_web](https://mobile.twitter.com/sakata_web)<br>
  [【コーダー向け】ViteでHTML（ejsライク）・Sass・JSな普通のコーディング環境を作ってみた](https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc)

# COMMAND
- `npm run dev`で開発環境起動
- `npm run build`でdistフォルダ作成（提出用ファイル）
- ** package.jsonを参照すること **

# 注意点
- 開発フォルダはsrcです
- publicフォルダ内のファイルは圧縮されます
- `src/public/assets/js/`にjsファイルがない場合は<font color="Red">package.json > scripts > build の`&& esbuild`以降を削除すること</font>
- htmlを新規作成した場合はvite.config.js > defineConfig > build > input に追記すること<br>
例：hoge.htmlを作成した場合
`hoge: resolve(__dirname, './src/hoge.html'),`

# meta
- metaの中身はmeta.jsonで管理しています
- ページが増えた場合は、適宜meta.jsonの中身とページ内の変数を変えてください

# 画像圧縮
- viteImageminで実行させてます

# 変数の記述方法
- 基本的にhandlebarsの記述方法で行うこと 例：`{{hoge}}`
- includeとhtml内で定義した変数のみEJSが使用可能 例：`<%= hoge %>`
- 外部JSONファイルは以下の通りで読み込む
  1. `const fs = require('fs');`を必ず記述
  2. `var data = JSON.parse(fs.readFileSync('./src/json/data.json', 'utf8'));`のように読み込みの記述を行うこと
  3. pluginsのhandlebars内で指定すること
  例：`data:data` 【htmlに渡す名前】:【2で定義した変数名】
