/*!SECTION
Давайте створимо текст, що прокручується!

Ваша задача - написати функцію, яка отримує на вхід рядок і повертає масив з усіма можливими поворотами заданого рядка у верхньому регістрі.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

*/

function scrollingText(text){
	return [...text].map((_, i) => (text.slice(i) + text.slice(0, i)).toUpperCase())
}

console.log(scrollingText('abc'));
