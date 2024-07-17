/*!SECTION

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// v1
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i +=1) {
    if (vowels.includes(str[i])) {
			count += 1;
		}
  }
	return count;
}

console.log(getCount('abracadabra'));

// v2

function getCount(str) {
	return [...str].filter(char => 'aeiouAEIOU'.includes(char)).length
}

console.log(getCount('abracadabra'))

