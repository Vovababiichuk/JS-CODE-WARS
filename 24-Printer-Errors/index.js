/*!SECTION

На фабриці принтер друкує етикетки для коробок. Для одного виду коробок принтер повинен використовувати кольори, які, заради простоти, називаються буквами від а до м.

Кольори, які використовуються принтером, записуються у рядок керування. Наприклад

Іноді виникають проблеми: відсутність кольорів, технічна несправність і «поганий» рядок управління виробляється, наприклад, aaaxbbbbyyhwawjjjwm з літерами не від а до м.

Ви повинні написати функцію, printer_error якій заданий рядок поверне частоту помилок принтера як рядок, що представляє собою раціональний, чисельником якого є кількість помилок, а знаменником - довжина контрольного рядка. Не зменшуйте цей дріб до простішого виразу.

Рядок має довжину більшу або рівну одиниці і містить лише літери з a to z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/

// v1
function printerError(s) {
	return s.split('').filter(char => char > 'm').length + '/' + s.length;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));

// v2

function printerError(s) {
	let count = 0;

	for (let char of s) {
		if (char > 'm') {
			count += 1
		}
	}

	return `${count}/${s.length}`
}

console.log(printerError('aaabbbbhaijjjm')); // "0/14"
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')); // "8/22"
console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')); // "3/56"

// v3

function printerError(s) {
	const error = s.split('').filter(char => char > 'm').length
	return `${error}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));