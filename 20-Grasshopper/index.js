/*!SECTION
Це досить проста задача. Ваша мета - створити функцію, яка видаляє перший та останній символи рядка. Вам задано один параметр - вихідний рядок. Вам не потрібно турбуватися про рядки, що містять менше двох символів.
*/

// v1

function removeChar(str) {
	return str.split('').slice(1, -1).join('');

}

console.log(removeChar('eloquent'));
console.log(removeChar('place'));

// v2

function removeChar(str) {
	return str.slice(1, -1);

}

console.log(removeChar('eloquent'));
console.log(removeChar('place'));