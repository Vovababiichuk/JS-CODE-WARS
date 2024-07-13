/*!SECTION

Ви пишете код, щоб контролювати світлофори вашого міста. Вам потрібна функція для обробки кожної зміни від зеленого, до жовтого, до червоного, а потім до зеленого знову.

Завершіть функцію, яка приймає рядок як аргумент, що представляє поточний стан світла, і повертає рядок, що представляє стан, на який має змінюватися світло.

Наприклад, коли вхід зелений, вихід повинен бути жовтим.

*/

// v1

function updateLight(current) {
  if (current === 'green') {
		return 'yellow';
	} else if (current === 'yellow') {
		return 'red'
	} else if (current === 'red') {
		return 'green'
	}
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'));

// v2

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
    default:
      throw new Error('Invalid light color');
  }
}

console.log(updateLight('green')); // "yellow"
console.log(updateLight('yellow')); // "red"
console.log(updateLight('red')); // "green"
console.log(updateLight('blue'));

// v3

function updateLight(current) {
	return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))

// v4

function updateLight(current) {
	return {
		green: 'yellow',
		yellow: 'red',
		red: 'green'
	}[current];
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))