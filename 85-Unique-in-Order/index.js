/*!SECTION
Реалізувати функцію unique_in_order, яка отримує в якості аргументу послідовність і повертає список елементів без елементів з однаковим значенням поруч і зі збереженням початкового порядку елементів.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = function(iterable) {
	if (typeof iterable === 'string') {
			iterable = iterable.split('');
	}

	if (!Array.isArray(iterable)) {
			throw new TypeError('The provided argument is neither a string nor an array.');
	}

	return iterable.filter((item, index) => item !== iterable[index - 1]);
};

// Тести
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));   // [1, 2, 3]
console.log(uniqueInOrder(['A', 'B', 'B', 'C'])); // ['A', 'B', 'C']
