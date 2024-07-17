// TODO -  CHECK BY NUMBER
//? return [...pin].every(char => char >= '0' && char <= '9')

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

