// カウンターアプリに発展させてみましょう

const display = document.getElementById("display")
const button = document.getElementById("button")
button.onclick = function() {
  display.textContent = "クリックされた！！"
  console.log("クリックしたよね？")
}
