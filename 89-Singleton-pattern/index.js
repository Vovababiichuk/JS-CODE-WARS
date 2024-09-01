/*!SECTION
У програмній інженерії патерн синглтон - це патерн проектування, який обмежує екземпляри класу одним об'єктом. Це корисно, коли для координації дій у системі потрібен лише один об'єкт.

Створіть паттерн Singleton, щоб у системі був лише один об'єкт.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
*/

// var Singleton = function(){
// };

// class Singleton {
// 	constructor (name, age, role) {
// 		this.name = name,
// 		this.age = age,
// 		this.role = role
// 	}

// 	showMessage() {
// 		return `Hello, my name is ${this.name}, I am ${this.age} years old and I am a ${this.role}`
// 	}
// }


// const s1 = new Singleton('John', 30, 'developer');
// const s2 = new Singleton('Jane', 25, 'designer');
// console.log(s1.showMessage());
// console.log(s2.showMessage());

// console.log(s1.name);

// console.log(s1===s2);

// const obj1 = new Singleton;
// const obj2 = new Singleton;

// console.log(obj1 === obj2);

var Singleton = function() {
	if (Singleton.instance) {
			return Singleton.instance;
	}
	this.test = 0;
	Singleton.instance = this;
};

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2); // Вивід: true
obj1.test = 1;
console.log(obj2.test); // Вивід: 1

