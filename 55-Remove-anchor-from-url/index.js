/*!SECTION
Допишіть функцію/метод так, щоб він повертав url з будь-яким значенням після видалення якоря (#).

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

// v1
function removeUrlAnchor(url){
	return url.split('#')[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com?page=1"));