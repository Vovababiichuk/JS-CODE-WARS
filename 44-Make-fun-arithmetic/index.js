/*!SECTION

За заданими двома числами та арифметичним оператором (його ім'я у вигляді рядка) виведіть результат застосування цього оператора до двох чисел.

Числа a та b повинні бути натуральними, причому a завжди буде першим числом в операції, а b завжди другим.

Чотири оператори: "додати", "відняти", "поділити", "помножити".

Кілька прикладів:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5

*/

// v1

// function arithmetic(a, b, operator){
//   let res = 0;
//   switch (operator) {
//     case 'add':
//       res = a + b;
//       break;
//     case 'subtract':
//       res = a - b;
//       break;
//     case 'multiply':
//       res = a * b;
//       break;
//     case 'divide':
//       res = a / b;
//       break;
//       default:
//         break;
//   }
//   return res;
// }

// console.log(arithmetic(5, 2, 'divide'));

// v2

// function arithmetic(a, b, operator){
//   const operations = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b
//   };

//   return operations[operator](a, b);
// }

// console.log(arithmetic(5, 2, 'add'));

// v3

const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);

console.log(arithmetic(5, 2, 'multiply'));
