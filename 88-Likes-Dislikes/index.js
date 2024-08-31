/*!SECTION
Історія
На YouTube була кнопка «подобається» і «не подобається», яка дозволяла користувачам висловлювати свою думку щодо певного контенту. Вона була налаштована таким чином, що ви не могли одночасно поставити лайк і дизлайк відео. Є ще два цікавих правила, які варто відзначити в інтерфейсі: Натискання кнопки, яка вже активна, скасовує ваше натискання. Якщо ви натискаєте кнопку «Мені подобається» після натискання кнопки «Не подобається», кнопка «Мені подобається» перезаписує попередній стан «Не подобається». Те ж саме справедливо і для зворотного натискання.

Завдання
	Створіть функцію, яка отримує на вхід список натискань кнопок і повертає кінцевий стан.

Examples
	likeOrDislike([Dislike]) => Dislike
	likeOrDislike([Like,Like]) => Nothing
	likeOrDislike([Dislike,Like]) => Like
	likeOrDislike([Like,Dislike,Dislike]) => Nothing

Примітки
	Якщо жодна кнопка наразі не активна, поверніть Nothing.
	Якщо список порожній, поверніть Nothing.
*/

function likeOrDislike(buttons) {
	return buttons.reduce((acc, curr) => curr === acc ? 'Nothing' : curr, 'Nothing');
}

console.log(likeOrDislike(['Dislike'])) // Output: Dislike
console.log(likeOrDislike(['Like', 'Like'])) // Output: Nothing
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])) // Output: Nothing
