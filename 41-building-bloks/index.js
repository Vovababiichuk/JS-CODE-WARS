/*!SECTION

Напишіть клас Block, який створює блок (Duh..)

Вимоги
Конструктор повинен приймати масив як аргумент, він буде містити 3 цілих числа форми [ширина, довжина, висота], з якої повинен бути створений блок.

Визначте ці методи:
`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`

let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
  b.getWidth() // -> 2

  b.getLength() // -> 4

	b.getHeight() // -> 6

  b.getVolume() // -> 48

  b.getSurfaceArea() // -> 88

*/

// v1

// class Block {
// 	constructor([width, length, height]) {
// 		this.width = width;
// 		this.length = length;
// 		this.height = height;
// 	}

// 	getWidth = () => this.width;
// 	getLength = () => this.length;
// 	getHeight = () => this.height;
// 	getVolume = () => this.width * this.length * this.height;
// 	getSurfaceArea = () => 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
// }

// const b = new Block([2, 4, 6]);
// console.log(b.getSurfaceArea());


// v2

class Block {
	constructor(data) {
		[this.w, this.l, this.h] = data;
	}

	getWidth() {
		return this.w;
	}
	getLength() {
		return this.l;
	}
	getHeight() {
		return this.h;
	}
	getVolume() {
		let {w, l, h} = this;
		return w * l * h;
	}
	getSurfaceArea() {
		let {w, l, h} = this;
		return 2 * (w * l + w * h + l * h);
	}
}

const b = new Block([2, 4, 6]);
console.log(b.getSurfaceArea());

