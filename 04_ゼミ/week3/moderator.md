# 今日やること

## 本日のテーマ：**メモアプリを極める**

> - 今までのメモアプリ：状態を管理せず、DOMを直接操作する
> - 今日のメモアプリ：状態を管理して、よりよいメモアプリを作る

## コンテンツ

1. 今までのメモアプリ
2. 配列を使って状態管理
3. localStorage を使って消えないメモを作ろう(発展)

## 今までのメモアプリ

```javascript
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
      // inputに入力した内容を取得する
      const text = memoInput.value

      // 取得した内容をDOMに反映する
      const div = document.createElement("div")
      div.textContent = text
      memoContainer.append(div)
    }
```

### 問題点

- DOM を毎回操作するのが大変！
- メモの並べ替えをしようとすると大変！

→状態で管理しよう！

## 配列で管理する

それぞれのメモ

## プロトタイプメソッド

配列やオブジェクトに元から用意されている関数のこと。

MDN を見れば書いてある！
