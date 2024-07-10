// v1

function findAverage(array) {
	if (array.length === 0) return 0;

	return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));
console.log(findAverage([]));

// v2

function findAverage(array) {
	return array.length !== 0
		? array.reduce((acc, curr) => acc + curr, 0) / array.length
		: 0
}

console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))
console.log(findAverage([]))
