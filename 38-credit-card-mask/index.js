/*!SECTION

Зазвичай, коли ви щось купуєте, вас запитують, чи правильний номер вашої кредитної картки, номер телефону або відповідь на ваше найпотаємніше запитання. Однак, оскільки хтось може зазирнути вам через плече, ви не хочете, щоб це відображалося на екрані. Натомість, ми це маскуємо.

Ваше завдання - написати функцію maskify, яка змінює всі символи, окрім останніх чотирьох, на '#'.

Examples (input --> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// v1

function maskify(cc) {
	const findMaskifyNumbers = cc.slice(0, cc.length - 4);
	const findLastFourNumbers = cc.slice(cc.length - 4);
	const replaceNumbersToHash = [...findMaskifyNumbers].map(el => '#').join('');
	return replaceNumbersToHash + findLastFourNumbers;
}

console.log(maskify("64607935616"));
console.log(maskify("Skippy"));

// v2

function maskify(cc) {
	if (cc.length <= 4) return cc;
	return '#'.repeat(cc.length - 4) + cc.slice(-4);
}

console.log(maskify("64607935616"));
console.log(maskify("Skippy"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Nananananananananananananananana Batman!"));

// v3

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// v4

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}


