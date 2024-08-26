/*!SECTION
Доповніть функцію keysAndValues так, щоб вона отримувала об'єкт і повертала ключі та значення у вигляді окремих масивів.

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

Точки стилів (тільки JS/CoffeeScript): Ця категорія перевіряє лише дані, які використовують об'єктну буквену нотацію (прості об'єкти). Для додаткового стилю, чи можете ви змусити ваш метод перевіряти об'єкти, які розширюють свій прототип?

*/

function keysAndValues(data) {
	return [Object.keys(data), Object.values(data)]
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
console.log(keysAndValues({ 1: 'a', 2: 'b', 3: 'c' }))
console.log(keysAndValues({}))
