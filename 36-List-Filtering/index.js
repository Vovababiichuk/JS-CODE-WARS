/*!SECTION
У цьому завданні ви створите функцію, яка отримує список невід'ємних цілих чисел та рядків і повертає новий список з відфільтрованими рядками.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
	return l.filter(el => typeof el === 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));