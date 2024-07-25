/*!SECTION
Вам дан массив целых чисел нечетной длины, все из которых одинаковы, за исключением одного единственного числа.

Завершите метод, который принимает такой массив и возвращает это единственное число.

Входной массив всегда будет верным! (нечетная длина >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/
/*!SECTION
Вам дан массив целых чисел нечетной длины, все из которых одинаковы, за исключением одного единственного числа.

Завершите метод, который принимает такой массив и возвращает это единственное число.

Входной массив всегда будет верным! (нечетная длина >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// v1

function stray(numbers) {
	return +numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// v2

const stray = nums => nums.reduce((a, b) => a ^ b);

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// v3

function stray(numbers) {
	let result = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] !== numbers[i - 1]) {
			result = numbers[i];
			break;
		}
	}
	return result;
}