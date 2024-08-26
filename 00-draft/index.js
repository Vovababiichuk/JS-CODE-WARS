// TODO -  CHECK BY NUMBER
//? return [...pin].every(char => char >= '0' && char <= '9')

// TODO - convert to number
map(Number)

// TODO - FILTER LETTERS
filter(letter => /[a-z]/.test(letter))
// Цей рядок фільтрує масив, залишаючи тільки літери від ‘a’ до ‘z’. Це виключає всі інші символи, такі як пробіли, цифри та спеціальні символи.
/*
	const obj = [...city.toLowerCase()]
    .filter(letter => /[a-z]/.test(letter))
    .reduce((acc, letter) => {
      acc[letter] = (acc[letter] || '') + '*';
      return acc;
    }, {})
*/

//TODO - CREATE A NEW ARRAY with numbers from 1 to n
console.log(new Array(n).fill(0).map((_, i) => i + 1))

//TODO - 10% discount

let result = 120 * 0.9;
console.log(result); // 108

//TODO - vowels

// 'aeiouAEIOU'

//TODO - slice(-4)

const str = "Skippy";

console.log(str.slice(-4)); // 'ippy'

//TODO - sort by title alphabetically

let books = [
	{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
	{ title: 'Clean Code', author: 'Robert C. Martin' },
	{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
	{ title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' }
];

// Sorting the books array by title alphabetically
books.sort((a, b) => a.title < b.title ? -1 : 1);

// Output the sorted books
console.log(books);

//TODO - frequency item in array
function mostFrequentItemCount(collection) {
	const frequencyObj = collection.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	}, {}) // {2: 2, 3: 4, 4: 1, 9: 1, -1: 5}

	return Math.max(...Object.values(frequencyObj));
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));

