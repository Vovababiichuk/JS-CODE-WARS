/*!SECTION
Кілька людей стоять в ряд, розділені на дві команди.
Перша людина стає в команду 1, друга - в команду 2, третя - в команду 1 і так далі.

За заданим масивом натуральних чисел (вага людей) повернути новий масив/кортеж з двох цілих чисел, де перше число - сумарна вага команди 1, а друге - сумарна вага команди 2.

Notes
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/


// v1

function rowWeights(array){
	let teamOne = 0;
	let teamTwo = 0;
	array.map((_, i) => {
		if (i % 2 === 0) {
			teamOne += array[i];
		} else {
			teamTwo += array[i];
		}
	})
	return [teamOne, teamTwo]
}

console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([80]));

// v2

function rowWeights(array){
	let teamOne = 0;
	let teamTwo = 0;
	array.map((_, i) => {
		i % 2 === 0 ? teamOne += array[i] : teamTwo += array[i];
	})
	return [teamOne, teamTwo]
}

console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([80]));