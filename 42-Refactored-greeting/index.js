/*!SECTION

Наступний код міг би використати трохи об'єктно-орієнтованого артистизму. Хоча це простий метод, і він чудово працює і так, у великій системі краще організувати методи у класи/об'єкти. (Або, принаймні, щось подібне, залежно від вашої мови)

Рефакторингуйте наступний код так, щоб він належав класу/об'єкту Person. Кожен екземпляр Person матиме метод greet. Екземпляр Person повинен мати ім'я, щоб його більше не потрібно було передавати при кожному виклику методу greet.

Ось як буде використовуватися остаточний рефакторинговий код:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'

*/

function greet(myName, yourName) {
  return `Hello ${yourName}, my name is ${myName}`;
}

class Person {
	constructor(name) {
		this.name = name;
	}

	greet(yourName) {
		return `Hello ${yourName}, my name is ${this.myName}`
	}
}

const joe = new Person('Joe');
console.log(joe.greet('Kate'));
console.log(joe.name);