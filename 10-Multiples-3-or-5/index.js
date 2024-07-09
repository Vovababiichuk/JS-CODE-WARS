/*!SECTION
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Якщо ми перерахуємо всі натуральні числа до 10, кратні 3 або 5, то отримаємо 3, 5, 6 і 9. Сума цих чисел дорівнює 23.

Доопрацюйте розв'язок так, щоб він повертав суму всіх чисел, кратних 3 або 5, менших за введене число.

Крім того, якщо число від'ємне, виведіть 0.

Зауваження: Якщо число кратне і 3, і 5, порахуйте його лише один раз.
*/

// v1

// function solution(number) {
// 	if (number < 0) return 0
// 	return new Array(number - 1)
// 		.fill()
// 		.map((_, i) => i + 1)
// 		.filter(num => num % 3 === 0 || num % 5 === 0)
// 		.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(solution(10))
// console.log(solution(-10))

// v2

function solution(number) {
	let sum = 0
	for (let i = 1; i < number; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i
		}
	}
	return sum
}

console.log(solution(10))
console.log(solution(-10))

