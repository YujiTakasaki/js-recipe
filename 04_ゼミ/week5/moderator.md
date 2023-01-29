# 本日のテーマ：**Vue CLI**

## コンテンツ

1. Vue の復習
2. Vue CLI 導入
3. Vue CLI 基礎 (コンポーネント)
4. Vue CLI 発展 (slot, props)

# Vue の復習

## Vue とは

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

### `computed` プロパティ

- `data` の値をもとにして別の値を計算したいときに使用

### `methods` プロパティ

- 関数を書く
