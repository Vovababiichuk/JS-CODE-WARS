/*!SECTION
Ви повинні створити функцію spread, яка отримує функцію і список аргументів, які будуть застосовані до цієї функції. Ви повинні зробити так, щоб ця функція повертала результат виклику заданої функції/лямбди з заданими аргументами.

spread(someFunction, [1, true, "Foo", "bar"] )
// is the same as...
someFunction(1, true, "Foo", "bar")
*/

function spread(func, args) {
	return func(...args);
}

console.log(spread(function(x,y){return x+y}, [1,2]));