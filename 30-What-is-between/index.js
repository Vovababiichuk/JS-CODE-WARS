/*!SECTION

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

a = 1
b = 4
--> [1, 2, 3, 4]

*/

// v1

function between(a, b) {
	const newArr = [];
  for (let i = a; i <= b; i += 1) {
		newArr.push(i)
	}

	return newArr;
}

console.log(between(1, 4));

// v2

function between(a, b) {
  return new Array(b - a + 1).fill(0).map((_, i) => a + i);
}

console.log(between(1, 4));
