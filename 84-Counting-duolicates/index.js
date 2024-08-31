/*!SECTION
Підрахувати кількість дублікатів
Напишіть функцію, яка повертає кількість різних алфавітних символів і цифр, які зустрічаються у вхідному рядку більше одного разу без урахування регістру. Вважається, що вхідний рядок містить лише літери (як великі, так і малі) та цифри.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// algo
// 1. convert string in array
// 2. filter duplicate characters
// 3. unique char new Set
// 4. output length

function duplicateCount(text) {
	return [...new Set(text.toLowerCase().split('').filter((char, index, arr) => arr.indexOf(char) !== index))].length
}

console.log(duplicateCount(''));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('AabBcde'));
console.log(duplicateCount('Indivisibility'));

