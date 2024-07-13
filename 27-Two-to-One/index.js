/*!SECTION

Візьміть 2 рядки s1 і s2, включаючи тільки літери від a до z. Повертає новий відсортований рядок, найдовший з можливих, що містить різні літери - кожна з яких береться лише один раз - з s1 або s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

// v1

function longest(s1, s2) {
	const set = new Set([...s1, ...s2])
	return [...set].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"));

// v2

function longest(s1, s2) {
	return [...new Set([...s1, ...s2])].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"));
