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