/*!SECTION
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// v1

// function XO(str) {
// 	str = str.toLowerCase()

// 	let countX = 0;
// 	let countO = 0;

// 	for (let char of str) {
// 		if (char === 'o') {
// 			countO += 1;
// 		} else if (char === 'x') {
// 			countX += 1;
// 		}
// 	}

// 	return countX === countO;
// }

// console.log(XO('ooxx'));
// console.log(XO('xooxx'));
// console.log(XO("zpzpzpp"));

// v2

function XO(str) {
	const normalizeStr = str.toLowerCase().split('')
	const lengthO = normalizeStr.filter(char => char === 'o').length
	const lengthX = normalizeStr.filter(char => char === 'x').length
	return lengthX === lengthO
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('zpzpzpp'))
