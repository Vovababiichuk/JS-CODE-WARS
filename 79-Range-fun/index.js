/*
Створіть функцію генератора діапазону, яка буде приймати до 3 параметрів - початкове значення, крок і кінцеве значення. Ця функція повинна повертати ітерований об'єкт з числами. Для простоти припустимо, що всі параметри є додатними числами.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/

//! v1
const range = (from, step, to) => {
  let start;
  let end;
  let increment;

  if (step === undefined && to === undefined) {
    end = from;
    start = 1;
    increment = 1;
  } else if (to === undefined) {
    start = from;
    end = step;
    increment = 1;
  } else {
    start = from;
    increment = step;
    end = to;
  }

  const result = [];
  for (let i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
};

console.log(range(5)); // [1, 2, 3, 4, 5]
console.log(range(3, 7)); // [3, 4, 5, 6, 7]
console.log(range(2, 3, 15));
[2, 5, 8, 11, 14];
