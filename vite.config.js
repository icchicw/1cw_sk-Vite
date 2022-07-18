import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteImagemin from 'vite-plugin-imagemin'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import handlebars from 'vite-plugin-handlebars';
import ejs from 'vite-plugin-ejs-engine';
// import glob from "glob";

//Node.js基本機能「File System」
const fs = require('fs');
//JSON読み込み用
var data = JSON.parse(fs.readFileSync('./src/json/data.json', 'utf8'));
var meta = JSON.parse(fs.readFileSync('./src/json/meta.json', 'utf8'));




//HTML上で出し分けたい各ページごとの情報
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
    firstname: 'Yehuda',
    lastname: 'Katz',
  },
  '/list.html': {
    isHome: false,
    title: 'List Page',
  },
};
const indexData = {
  '/index.html': {
    first: "Yuji",
    last: "Nakazawa",
    array: {
      arraydata01: "hoge01",
      arraydata02: "hoge02",
      arraydata03: 22,
    },
  }
};



export default defineConfig({
  server: {
    port: 3200, // 任意のポート番号を書く
    host: true //IPアドレスを有効化
  },
  base: './', //相対パスでビルドする
  root: './src', //開発ディレクトリ設定
  build: {
    outDir: '../dist', //出力場所の指定
    rollupOptions: { //ファイル出力設定        
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
	        //ビルド時のCSS名を明記してコントロールする
          if(extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
      input: {
        index: resolve(__dirname, './src/index.html'),
        /*
        複数HTMLページを出力したい時にここへ追記していく
        xxx: resolve(__dirname, './src/xxx.html'),
        */
        list: resolve(__dirname, './src/list.html'),
        party: resolve(__dirname, './src/party.html'),
      },

    },
  },
  plugins: [
    sassGlobImports(),
    ejs(),
    handlebars({
      //コンポーネントの格納ディレクトリを指定
      partialDirectory: resolve(__dirname, './src/components'),
      
      //各データ
      context: {
        con3ttl: "Hello, Context3",
        con3ary: {
          ary01 : "ary01-item",
          ary02 : "ary02-item",
          ary03 : "ary03-item",
        },
        momoclo : [
          {firstname : "Kanako", lastname : "Momota"},
          {firstname : "Ayaka", lastname : "Sasaki"},
          {firstname : "Shiori", lastname : "Tamai"},
          {firstname : "Momoka", lastname : "Ariyasu"},
          {firstname : "Reni", lastname : "Takagi"},
          ],
        color : {
          "Kanako" : "red",
          "Ayaka" : "pink",
          "Shiori" : "yellow",
          "Momoka" : "green",
          "Reni" : "purple",
        },
        //JSON読み込み
        data: data,
        meta: meta,
      },

      //各ページ情報の読み込み
      context1(pagePath) {
        return pageData[pagePath];
      },
      context2(pagePath) {
        return indexData[pagePath];
      },
    }),

    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
});



