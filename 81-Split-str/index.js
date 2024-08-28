/*!SECTION
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
	return str.split('')
		.reduce((acc, curr, index, arr) => {
			if (index % 2 === 0) {
				acc.push(curr + (arr[index + 1] || '_'))
			}
			return acc
		}, [])
}

console.log(solution('abcdef'))
console.log(solution('abc'))
