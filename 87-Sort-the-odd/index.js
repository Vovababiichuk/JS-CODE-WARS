/*!SECTION
Вам задано масив чисел. Вам потрібно відсортувати непарні числа у зростаючому порядку, залишивши парні числа на своїх початкових позиціях.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
	const oddNumbers = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

	return array.map(el => (el % 2 !== 0 ? oddNumbers.shift() : el));
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
