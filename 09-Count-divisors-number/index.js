/*!SECTION
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

Вам потрібно написати функцію, яка приймає позитивне ціле число n та повертає кількість його дільників. Дільники числа n — це такі числа, які ділять n без залишку.
*/

// v1

// function getDivisorsCnt(n){
// 	const arr = [];
// 	for (let i = 1; i <= n; i += 1) {
// 		if (n % i === 0) {
// 			arr.push(i)
// 		}
// 	}
// 	return arr.join(', ')
// }

// console.log(getDivisorsCnt(4));
// console.log(getDivisorsCnt(5));
// console.log(getDivisorsCnt(12));
// console.log(getDivisorsCnt(30));

// 2

function getDivisorsCnt(n) {
	return new Array(n)
		.fill(0)
		.map((_, i) => i + 1)
		.filter(num => n % num === 0)
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
