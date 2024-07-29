/*!SECTION
Напишіть функцію, яка знаходить кількість елементів масиву, що зустрічаються найчастіше. Вважайте, що вхідні дані є масивом цілих чисел. Для порожнього масиву повернути 0

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5

Найчастішим числом у масиві є -1, воно зустрічається 5 разів.

*/

// v1

function mostFrequentItemCount(collection) {
	if (collection.length === 0) return 0;
	const frequencyObj = collection.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	}, {})

	return Math.max(...Object.values(frequencyObj))
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));
console.log(mostFrequentItemCount([3, -1, -1]));
console.log(mostFrequentItemCount([]));



