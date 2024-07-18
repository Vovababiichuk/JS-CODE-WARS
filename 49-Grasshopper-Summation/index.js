/*!SECTION
Напишіть програму, яка знаходить суму всіх чисел від 1 до num. Число завжди має бути натуральним, більшим за 0. Ваша функція повинна повертати лише результат, те, що показано у дужках у прикладі нижче, показує, як ви досягаєте цього результату, і не є його частиною, див. приклади тестів.

Наприклад (Input -> Output):
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


*/
// v1
// const summation = function (num) {
// 	return new Array(num)
// 		.fill(0)
// 		.map((_, i) => i + 1)
// 		.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(summation(2))
// console.log(summation(8))


// v2
const summation = function (num) {
	let sum = 0;
	for (let i = 1; i <= num; i += 1) {
		sum += i;
	}

	return sum;
}

console.log(summation(2))
console.log(summation(8))

