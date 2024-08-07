/*!SECTION
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

// v1

function findNeedle(haystack) {
	const indexEl = haystack.indexOf('needle');
	return `found the needle at position ${indexEl}`
}

console.log(
	findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
)

// v2

function findNeedle(haystack) {
  const indexEl = haystack.indexOf('needle');
  return indexEl !== -1
    ? `found the needle at position ${indexEl}`
    : 'needle not found';
}

console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);

console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk'])
);

// v3

function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf('needle')}`
}

console.log(
	findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
)
