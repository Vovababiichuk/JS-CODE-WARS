/*!SECTION
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN(pin) {
	if (pin.length !== 4 && pin.length !== 6) {
		return false
	}
	return [...pin].every(char => char >= '0' && char <= '9')
}

console.log(validatePIN('1234'))
console.log(validatePIN('12345'))
console.log(validatePIN('a234'))

console.log(validatePIN('.234'))

console.log(validatePIN('2 34'))
console.log(validatePIN('2345 6'))
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

console.log(validatePIN("1"))
console.log(validatePIN("12"))
console.log(validatePIN("123"))
console.log(validatePIN("1234567"))
console.log(validatePIN("-1.234"))
console.log(validatePIN("00000000"))

//! =========Best Practice================
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }