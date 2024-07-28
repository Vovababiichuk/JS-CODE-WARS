/*!SECTION

Повернути масив, що містить числа від 1 до N, де N - задане значення.
Однак, замініть деякі значення, якщо виконується будь-яка з наступних умов:

Якщо значення кратне 3: використовуйте значення "Fizz" замість нього
Якщо значення кратне 5: використовуйте значення "Buzz" замість нього
Якщо значення кратне 3 і 5: використовуйте значення "FizzBuzz"

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/


// v1

function fizzbuzz(n) {
	return new Array(n).fill(0).map((_, i) => i + 1)
		.map(el =>
			el % 3 === 0 && el % 5 === 0
			? 'FizzBuzz' : el % 3 === 0
			? 'Fizz' : el % 5 === 0 ? 'Buzz' : el)
	}

	console.log(fizzbuzz(36)); // -->  [1, 2, "Fizz"]