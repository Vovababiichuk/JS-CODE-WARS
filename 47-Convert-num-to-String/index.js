/*!SECTION
Нам потрібна функція, яка може перетворити число (ціле число) у рядок.

Які способи досягнення цього ви знаєте?

Приклади (ввід --> вивід):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/

function numberToString(num) {
	// return String(num)
	// return num + ''
	// return `${num}`
	// return JSON.stringify(num)
	// return num.toFixed()

	return num.toString()
}

console.log(numberToString(123));
console.log(numberToString(999));
console.log(numberToString(-100));
