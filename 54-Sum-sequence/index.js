/*!SECTION
Вам потрібно написати функцію, яка повертає суму послідовності цілих чисел.

Послідовність задається 3 невід'ємними значеннями: begin, end, step.

Якщо значення begin більше за end, ваша функція повинна повернути 0. Якщо end не є результатом цілої кількості кроків, то не додавайте його до суми. Дивіться 4-й приклад нижче.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

// v1

const sequenceSum = (begin, end, step) => {
	if (begin > end) return 0;

	const arr = [];

	for (let i = begin; i <= end; i += step) {
		arr.push(i);
	}

	return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));

// v2


// const sequenceSum = (begin, end, step) => {
// 	return Array.from({ length: (end - begin) / step + 1 }, (_, i) => begin + i * step).reduce((acc, curr) => acc + curr, 0);
// };

// console.log(sequenceSum(2, 2, 2));
// console.log(sequenceSum(2, 6, 2));
// console.log(sequenceSum(1, 5, 1));
// console.log(sequenceSum(1, 5, 3));

