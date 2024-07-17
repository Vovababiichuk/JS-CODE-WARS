/*!SECTION

Ваша задача - написати функцію, яка може приймати в якості аргументу будь-яке невід'ємне ціле число і повертати його цифрами у порядку спадання. По суті, переставити цифри так, щоб отримати максимально можливе число.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

// v1

function descendingOrder(n){
  return +[...String(n)].sort((a, b) => b - a).join('')
}

console.log(descendingOrder(42145));
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(1201));
console.log(descendingOrder(-2));
console.log(descendingOrder(51));

// v2

function descendingOrder(n){
  return +String(n).split(' ').reverse().join('');
}

console.log(descendingOrder(42145));
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(1201));
console.log(descendingOrder(-2));
console.log(descendingOrder(51));
