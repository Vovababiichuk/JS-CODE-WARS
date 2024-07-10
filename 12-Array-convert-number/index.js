/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Перетворити число у перевернутий масив цифр
За заданим випадковим невід'ємним числом повернути цифри цього числа у масиві у зворотному порядку.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// v1
function digitize(n) {
	return String(n).split('').reverse().map(num => Number(num));
}

console.log(digitize(35231));
console.log(digitize(0));

// v2

function digitize(n) {
	return [...String(n)].reverse().map(Number)
}

console.log(digitize(35231));
console.log(digitize(0));
