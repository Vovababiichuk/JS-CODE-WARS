/*!SECTION
Підсумувати всі числа заданого масиву (наприклад, списку), окрім найбільшого та найменшого елементів (за значенням, а не за індексом!).

Найбільший або найменший елемент відповідно є єдиним елементом на кожному ребрі, навіть якщо їх декілька з однаковим значенням.

Зверніть увагу на перевірку вхідних даних.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Перевірка вхідних даних
Якщо замість масиву задано порожнє значення ( null, None, Nothing і т.д. ), або заданий масив є порожнім списком чи списком, що містить лише 1 елемент, то повернути 0.
*/

function sumArray(array) {
	if (!Array.isArray(array) || array.length <= 1 || array === null) {
		return 0
	}

	return array.reduce((acc, curr) => acc + curr, 0) - Math.max(...array) - Math.min(...array);
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
console.log(sumArray([0, 1, 6, 10, 10]));