/*!SECTION
Уявіть, що ви починаєте з 5-го поверху будівлі, потім спускаєтесь на 2-й поверх, а потім повертаєтесь на 8-й поверх. Всього ви проїхали 3 + 6 = 9 поверхів.

За заданим масивом поверхів, на які ви повинні піднятися на ліфті, виведіть ціле число - загальну відстань, пройдену при відвідуванні кожного поверху в масиві по порядку.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0

Масив завжди містить принаймні 2 поверхи. Випадкові тести будуть містити 2-20 елементів у масиві та значення поверху від 0 до 30.

*/

// v1
function elevatorDistance(array) {
	return array.map((_, i, arr) => Math.abs(arr[i] - arr[i + 1]) || 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([3, 3]));
console.log(elevatorDistance([5,2,8]));

// v2

function elevatorDistance(array) {
	return array.reduce((acc, curr, i, arr) => {
    if (i === 0) return acc;
    return acc + Math.abs(curr - arr[i - 1]);
  }, 0);
}

console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([3, 3]));
console.log(elevatorDistance([5,2,8]));

// v3

function elevatorDistance(array) {
  let distance = 0;
  for (let i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}