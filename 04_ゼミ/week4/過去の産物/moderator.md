# 本日のテーマ：**Vue**

## コンテンツ

1. Vue を使う意味
2. Vue を使う
3. Vue の特別な構文
4. `.vue` ファイルの書き方

## Vue を使う意味

- Vue は、**状態** と **表示** を一致させることができる
- → 状態が変われば、DOM が自動的に更新される

## Vue を使う

- `<script src="https://unpkg.com/vue@3.2.20"></script>` で読み込んで使う
- `id="app"` と`mount(”#app”)` でVueインスタンスとHTMLを結びつける

## Vue の特別な構文

### マスタッシュ構文

- 式がかける ( `1 + 1 = {{ 1 + 1 }}` )
- data に書いたものを表示できる

### `v-on` ディレクティブ

- イベントハンドラとして使用できる。
- `v-on:click`は `@click` と書くこともできる

### `data` プロパティ

- 状態(変数)を書く

### `methods` プロパティ

- 関数を書く

## `.vue` ファイルの書き方

- `<template>` で HTML が書ける
- `<script>` で JavaScript が書ける
  - `export default {}` 内で Vue インスタンスのオブジェクトを書く
  - → `data` や `methods` は `export defalut {}` の中に書く
- `<style>` で CSS が書ける

## `.vue` が動く仕組み

- `public/index.html` に`id=”app”` がある
- `src/main.js` で`App.vue` が読み込まれて`createApp(App).mount("#app");` されてる
- `npm run serve` や`npm run build` しているときに裏でVue CLIが`public` と`main.js` を読み込みつつ、`.vueファイル` を`js`に変換している

