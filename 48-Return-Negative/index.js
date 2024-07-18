/*!SECTION
У цьому простому завданні вам дається число, і ви повинні зробити його від'ємним. Але, можливо, число вже є від'ємним?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

*/

// v1
function makeNegative(num) {
  return num < 0 ? num : -num
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

// v2

function makeNegative(num) {
	return -Math.abs(num);
}
