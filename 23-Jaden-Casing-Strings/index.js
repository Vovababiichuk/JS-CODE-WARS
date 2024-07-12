/*!SECTION

Джейден Сміт, син Вілла Сміта, зірка таких фільмів, як "Каратист" (2010) і "Після Землі" (2013). Джейден також відомий своєю філософією, яку він викладає через Твіттер. Коли він пише у Твіттері, він відомий тим, що майже завжди пише кожне слово з великої літери. Для простоти, вам доведеться писати кожне слово з великої літери, подивіться, як очікуються скорочення у прикладі нижче.

Ваше завдання - перетворити рядки так, як їх написав би Джейден Сміт. Ці рядки є власне цитатами Джейдена Сміта, але вони написані з великої літери не так, як він їх набрав.

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

// v1
const toJadenCase = (str) => {
	return str.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// v2

String.prototype.toJadenCase = function () {
  return this.trim().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};