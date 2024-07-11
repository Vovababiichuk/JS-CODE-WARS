/*!SECTION
Задано трикутник з послідовних непарних чисел:
     					1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Обчислити суму чисел у n-му рядку цього трикутника (починаючи з індексу 1), наприклад: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	return n ** 3;
}

console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(42));
