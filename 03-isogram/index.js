/*!SECTION
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// v1

// function isIsogram(str) {
// 	const normaliseStr = str.toLowerCase()
// 	const unicOfStr = [...new Set(normaliseStr)]
// 	return normaliseStr.length === unicOfStr.length;
// }

// console.log(isIsogram('Dermatoglyphics')) // true
// console.log(isIsogram('moOse')) // false
// console.log(isIsogram('aba')) // false

// v2

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}