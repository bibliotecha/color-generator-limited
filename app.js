const colors = ["green", "red", "blue", "yellow"];

document.body.style.border = "10px solid blue";
document.body.style.backgroundColor = "red";

/**
 * var ->　古い宣言の仕方。おすすめではない。
 * let -> 新しい。値の塗り替えが可能。
 * const -> 新しい。塗り替えができない。
 */
const button = document.querySelector("#btn");

/**
 * ボタンに何かしら変化があった時に反応させるためのツール
 */
button.addEventListener("click", changeColor);

function changeColor() {
  /**
   * 数字を０から３の間のランダムを選ぶことができれば
   * サイコロを振ることができればランダムで色を選べる
   */
  const number = Math.random() * 3; // 0から３の間の数字。サイコロで振られた数字
  const seisu = Math.ceil(number); // 0から３の間の整数
  document.body.style.backgroundColor = colors[seisu];
}
