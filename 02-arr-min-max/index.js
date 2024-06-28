/*
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.
*/

// v1

// function minMax(arr) {
//   const newArr = [];
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   newArr.push(min, max);
//   return newArr;
// }

// v2

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const arr = [1, 2, 3, 4, 5];

console.log(minMax(arr));
