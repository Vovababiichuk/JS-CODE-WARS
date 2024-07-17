/*!SECTION

Ти любиш будувати з цеглинок. Особливо тобі подобаються кубики, які мають форму квадрата. А ще більше тобі подобається складати їх у квадрат з квадратних будівельних блоків!

Однак іноді їх не вдається скласти в квадрат. Натомість виходить звичайний прямокутник! Кляті штуки! Якби ж то був спосіб дізнатися, чи даремно ви зараз працюєте... Зачекайте! Ось воно! Треба просто перевірити, чи є ваша кількість будівельних блоків ідеальним квадратом.

Задача
За заданим цілим числом визначте, чи є воно квадратним:

У математиці квадратним числом або досконалим квадратом називається ціле число, яке є квадратом цілого числа; іншими словами, воно є добутком деякого цілого числа на себе.

У тестах завжди буде використовуватися деяке ціле число, тому не хвилюйтеся про це у динамічно типізованих мовах.

-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false

*/

// v1
const isSquare = (n) => {
	return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(3))
console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(4))
console.log(isSquare(3))
console.log(isSquare(25))

// v2

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(2));
console.log(isSquare(4));
console.log(isSquare(16));
console.log(isSquare(25));
console.log(isSquare(27));