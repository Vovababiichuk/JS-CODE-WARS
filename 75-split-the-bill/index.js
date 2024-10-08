/*!SECTION
Ви в ресторані з друзями, і вже час йти, але є одна велика проблема... рахунок. Хто що буде платити? На щастя, у вас під рукою є комп'ютер! Одна проста функція - і рахунок оплачено, причому чесно!

Функція повинна приймати один параметр: об'єкт/дикт з двома або більше парами ім'я-значення, які представляють членів групи і суму, витрачену кожним з них.

Ваша функція повинна повертати об'єкт/дікт з тими ж іменами, показуючи, скільки грошей члени групи повинні заплатити або отримати.

Додаткові зауваження:

Значення повинні бути додатними числами, якщо людина повинна отримати гроші від групи, від'ємними числами, якщо вона винна гроші групі.
Якщо значення є десятковим дробом, округліть до двох знаків після коми.
Переклади та коментарі (і голосування!) вітаються.

Приклад
3 друзів йдуть разом на прогулянку: A витрачає £20, B витрачає £15 і C витрачає £10. Функція повинна повернути об'єкт/дикт, який показує, що A отримає £5, B отримає £0, а C заплатить £5.

var group = {
    A: 20,
    B: 15,
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}

*/

function splitTheBill(x) {
	const billValues = Object.values(x);
	const sum = billValues.reduce((acc, curr) => acc + curr, 0);
	const billKeys = Object.keys(x);
	const average = sum / billKeys.length;

	return billValues.reduce((acc, curr, i) => {
		acc[billKeys[i]] = +(curr - average).toFixed(2);
		return acc
	}, {})
}

console.log(splitTheBill({A: 20, B: 15, C: 10}));
console.log(splitTheBill({A: 40, B: 25, X: 10}));