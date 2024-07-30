/*!SECTION
Write a function that returns the number of arguments it received.

args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2

*/

// v1
const args_count = (...args) => args.length;

console.log(args_count());
console.log(args_count('a'));
console.log(args_count('a', 'b'));