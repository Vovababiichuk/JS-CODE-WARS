/*!SECTION
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// v1

function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];

	const positiveNumLength = input.filter(num => num > 0).length
  const negativeNumSum = input.filter(num => num < 0).reduce((acc, curr) => acc + curr, 0);

	return [positiveNumLength, negativeNumSum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

// v2

function countPositivesSumNegatives(input) {
  return input.reduce((acc, curr) => {
		if (curr > 0) {
			acc[0] += 1;
		} else if (curr < 0) {
			acc[1] += curr;
		}
		return acc;
	}, [0, 0])
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

// v3

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let countPositives = 0;
  let sumNegatives = 0;

  for (let num of input) {
    if (num > 0) {
      countPositives += 1;
    } else if (num < 0) {
      sumNegatives += num;
    }
  }

  return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); // [9, -50]
console.log(countPositivesSumNegatives([])); // []
