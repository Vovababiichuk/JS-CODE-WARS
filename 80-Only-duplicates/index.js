/*
Given a string, remove any characters that are unique from the string.

Example:
  input: "abccdefee"
  output: "cceee"
*/

//! v1
function onlyDuplicates(str) {
  return str.split('').filter(el => str.indexOf(el) !== str.lastIndexOf(el)).join('')
}

console.log(onlyDuplicates("abccdefee"));
console.log(onlyDuplicates("hello"));

