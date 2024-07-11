/*!SECTION
О ні, метод карти для масивів вимкнено. Чи можете ви це виправити?

Якщо ви не стикалися з методом мап для масивів, ось як він працює:

[1,2,3].map(x => x ** 2) === [1,4,9]
[1,2,3].map(x => 2 * x) === [2,4,6]
[1,2,3].map(x => 2 ** x) === [2,4,8]
[1,2,3].map(x => x.toString()) === ["1","2","3"]
["1","2","3"].map(x => parseInt(x)) === [1,2,3]
["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]

Метод map не мутує вихідний масив.
*/

// Go fix it :D

// v1

Array.prototype.map = function (callback) {
	const newArr = []

	for (let i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this))
	}

	return newArr
}

// v2

Array.prototype.map = function(func){
  const res = [];
  for(var i = 0; i < this.length; i++){
    res.push(func(this[i]));
  }
  return res;
}