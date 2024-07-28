/*!SECTION
У цьому завданні вам буде задано масив цілих чисел, елементи якого мають як від'ємне, так і додатне значення, за винятком одного числа, яке є або тільки від'ємним, або тільки додатним. Ваше завдання полягає у тому, щоб знайти це число.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

*/

// v1

function solve(arr){
	return arr.find(num => !arr.includes(-num))
};

console.log(solve([-3, 1, 2, 3, -1, -4, -2] ));
