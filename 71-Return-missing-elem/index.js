/*!SECTION
Друже, воїне коду, нам потрібна твоя допомога! Здається, ми загубили один з елементів нашої послідовності, і нам потрібна твоя допомога, щоб відновити його!

Задана послідовність повинна була містити усі цілі числа від 0 до 9 (у довільному порядку), але одного з них, здається, не вистачає.

Напишіть функцію, яка отримує на вхід послідовність унікальних цілих чисел від 0 до 9 (включно) і повертає відсутній елемент

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

*/

// v1
function getMissingElement(superImportantArray){
	const arrayCompare = new Array(10).fill().map((_, i) => i);
	return +arrayCompare.filter(el => !superImportantArray.includes(el))
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8

// v2

function getMissingElement(superImportantArray){
  for (let i = 0; i < 10; i += 1) {
		if (!superImportantArray.includes(i)) {
			return i
		}
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8

// v3

function getMissingElement(superImportantArray) {
  const n = superImportantArray.length; // Кількість елементів у масиві, зазвичай це n-1
  const expectedSum = (n * (n + 1)) / 2; // Сума арифметичної прогресії від 0 до n
  const actualSum = superImportantArray.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3
