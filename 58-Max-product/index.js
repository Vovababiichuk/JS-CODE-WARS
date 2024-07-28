/*!SECTION
За заданим масивом цілих чисел , знайдіть максимальний добуток, отриманий від перемноження 2 сусідніх чисел у масиві.

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6

Максимальний добуток, отриманий при множенні 2 * 3 = 6, і це сусідні числа у масиві.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

Максимальний добуток, отриманий при множенні -2 * 7 = -14, і це сусідні числа у масиві.

*/


// v1

function adjacentElementsProduct(array) {
	return array
		.map((num, i, arr) => num * arr[i + 1])
		.sort((a, b) => b - a)[0];
}

// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));

// v2
function adjacentElementsProduct(array) {
	const nawArr = [];
	for (let i = 0; i < array.length - 1; i += 1) {
		nawArr.push(array[i] * array[i + 1]);
	}
	return Math.max(...nawArr);
}

console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([1, 2, 3]))
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
