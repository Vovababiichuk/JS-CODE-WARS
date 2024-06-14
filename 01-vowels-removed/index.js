/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// ===============================================

// function strWithoutVowels(str) {
//   const newArr = [];
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < str.length; i += 1) {
//     if (!vowels.includes(str[i].toLowerCase())) {
//       newArr.push(str[i]);
//     }
//   }
//   return newArr.join('')
// }


// console.log(strWithoutVowels('Hello WorOOOld!!!'))
// console.log(strWithoutVowels('Hello World'));
// console.log(strWithoutVowels('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')); // t s  lng stblshd fct tht  rdr wll b dstrctd by th rdbl cntnt f  pg whn lkng t ts lyt.
// console.log(strWithoutVowels('AEIOUaeiou'));
// console.log(strWithoutVowels('1234567890'));
// console.log(strWithoutVowels(''));
// console.log(strWithoutVowels('BCDFG'));


// =====================================================================

// function getStrWithoutVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   return str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('')
// }

// console.log(getStrWithoutVowels('hello json'));
// console.log(getStrWithoutVowels('programming'));
// console.log(getStrWithoutVowels('aeiou'));
// console.log(getStrWithoutVowels('HELLO'));

// =====================================================================

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('Hello WorOOOld!!!'))
console.log(disemvowel('Hello World'));
console.log(disemvowel('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')); // t s  lng stblshd fct tht  rdr wll b dstrctd by th rdbl cntnt f  pg whn lkng t ts lyt.
console.log(disemvowel('AEIOUaeiou'));
console.log(disemvowel('1234567890'));
console.log(disemvowel(''));
console.log(disemvowel('BCDFG'));