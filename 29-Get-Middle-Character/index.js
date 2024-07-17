/*!SECTION

Вам буде дано слово. Ваше завдання - повернути середній символ слова. Якщо довжина слова непарна, поверніть середній символ. Якщо довжина слова парна, виведіть середні 2 символи.

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Вхідні дані

Слово (рядок) довжиною 0 < str < 1000 (у javascript ви можете отримати трохи більше 1000 у деяких тестових прикладах через помилку в тестових прикладах). Вам не потрібно перевіряти це. Це лише для того, щоб ви знали, що вам не потрібно турбуватися про те, що ваш розв'язок закінчиться за певний проміжок часу.

#Виведення

Середній(і) символ(и) слова у вигляді рядка.

*/

// v1

function getMiddle(s) {
	if (s.length % 2 === 1) {
		return s[Math.floor(s.length / 2)]
	}
	return [s[Math.floor(s.length / 2) - 1], s[Math.floor(s.length / 2)]].join('')
}

console.log(getMiddle('testing'));
console.log(getMiddle('test'));

// v2

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// v3

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// v4

function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 1) {
    // Непарна довжина рядка
    return s[middleIndex];
  } else {
    // Парна довжина рядка
    return s[middleIndex - 1] + s[middleIndex];
  }
}

// v5

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// v6

function getMiddle(s) {
  const middle = s.length / 2;
  return (s.length % 2)
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}