/*!SECTION
За заданим списком цілих чисел визначте, чи є сума його елементів непарною або парною.

Відповідь виведіть у вигляді рядка, що відповідає "непарна" або "парна".

Якщо вхідний масив порожній, то вважати його як: [0] (масив з нулем).

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// v1
function oddOrEven(array) {
	if (array.length === 0) {
		return [0];
	}
	return array.reduce((acc, curr) => {
		const sum = acc + curr;
		if (sum % 2 === 0) {
			return 'even';
		} else {
			return 'odd';
		}
	}, 0)
}

console.log(oddOrEven([]));
console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([0 , 1, 4]));
console.log(oddOrEven([0 , -1, -5]));

// v2

function oddOrEven(array) {
	if (array.length === 0) {
    return [0];
  }
	const sum = array.reduce((acc, curr) => acc + curr, 0);
	return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([]))
console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))

// v3

function oddOrEven(array) {
	return array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([]))
console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))

