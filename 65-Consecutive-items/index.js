/*!SECTION
Вам задано список унікальних цілих чисел arr і два цілих числа a та b. Ваша задача - з'ясувати, чи зустрічаються a та b підряд в arr, і повернути булеве значення (True, якщо a та b зустрічаються підряд, False у протилежному випадку).

Гарантується, що числа a та b зустрічаються в arr.

*/

// v1

function consecutive(arr, a, b) {
	return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
}

console.log(consecutive(([1, 3, 5, 7], 3, 7)));
console.log(consecutive(([1, 3, 5, 7], 3, 1)));
console.log(consecutive(([1, 6, 9, -3, 4, -78, 0], -3, 4)));


