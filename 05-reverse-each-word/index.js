/*!SECTION
Напишіть функцію, яка приймає рядок тексту і повертає обернений рядок без зміни порядку слів, але з оберненими символами в межах кожного слова. 
*/

const str = 'Hello! JavaScript practice'

const reverseFn = str => {
	return str
		.split(' ')
		.map(word => [...word].reverse().join(''))
		.join(' ')
}

console.log(reverseFn(str))


