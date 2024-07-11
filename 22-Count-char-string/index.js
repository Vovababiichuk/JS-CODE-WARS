/*!SECTION

Основна ідея полягає у підрахунку всіх символів, що зустрічаються у рядку. Якщо у вас є рядок типу aba, то результат повинен бути {'a': 2, 'b': 1}.

А якщо рядок порожній? Тоді результатом повинен бути порожній об'єктний літерал {}.

*/

// v1
function count(string) {
	if (string.length === 0) return {};
	return [...string].reduce((obj, key) => {
		obj[key] = (obj[key] || 0) + 1;
		return obj;
	}, {})
}

console.log(count(""));
console.log(count("aba"));

// v2

function count(string) {
	return [...string].reduce((obj, key) => {
		if (obj[key]) {
			obj[key] += 1
		} else {
			obj[key] = 1
		}
		return obj
	}, {})
}

console.log(count(""));
console.log(count("aba"));

