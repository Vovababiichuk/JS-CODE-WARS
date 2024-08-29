/*!SECTION
У вас є два аргументи: рядок - рядок випадкових літер (тільки малі літери) і масив - масив рядків (почуттів). Ваша задача - повернути кількість певних почуттів у масиві.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'

Якщо почуття можна утворити один раз - плюс один бал до відповіді.

Якщо почуття можна утворити кілька разів з різних літер - додайте одиницю до відповіді.

Кожна буква в рядку бере участь в утворенні всіх почуттів. 'angerw' -> 2 почуття: 'гнів' і 'страх'.
*/

const countFeelings = (string, array) => {
	const length = array.filter(feeling =>
		[...feeling].every(char => string.includes(char))
	).length

	return length === 1 ? `${length} feeling.` : `${length} feelings.`
}

console.log(
	countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief'])
)
console.log(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']))
console.log(
	countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief'])
)
console.log(
	countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear'])
)
