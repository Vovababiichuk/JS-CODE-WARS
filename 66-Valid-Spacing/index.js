/*!SECTION
Вам потрібно написати функцію з іменем valid_spacing() або validSpacing(), яка перевіряє, чи має рядок допустимі інтервали. Функція повинна повертати або true, або false (або відповідне значення у кожній мові).

У цій каталозі допустимим інтервалом вважається один пробіл між словами, без початкових та кінцевих пробілів. Словами можуть бути будь-які послідовні послідовності символів без пробілів. Нижче наведено кілька прикладів того, що повинна повертати функція:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true

Зауважте - у вхідному рядку не буде жодних розділових знаків чи цифр, лише літери.

*/

// v1
function validSpacing(s) {
	return s.startsWith(' ') || s.endsWith(' ') || s.includes('  ') ? false : true
}
console.log(validSpacing('Hello world'));
console.log(validSpacing(' Hello world'));
console.log(validSpacing('Helloworld'));
console.log(validSpacing('Helloworld '));
console.log(validSpacing('Hello  world '));

// v2
function validSpacing(s) {
	return s.trim() == s && !s.includes("  ");
}
console.log(validSpacing('Hello world'));
console.log(validSpacing(' Hello world'));
console.log(validSpacing('Helloworld'));