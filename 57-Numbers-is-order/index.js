/*!SECTION
Чи впорядковані числа?
У цьому каталозі ваша функція отримує на вхід масив цілих чисел. Ваша задача полягає у визначенні того, чи впорядковані числа за зростанням. Масив вважається впорядкованим за зростанням, якщо не існує двох сусідніх цілих чисел, у яких ліве число перевищує праве за значенням.

Для цілей цієї Ката ви можете вважати, що всі вхідні дані є дійсними, тобто масиви містять лише цілі числа.

Зауважте, що масив з 0 або 1 цілих чисел автоматично вважається відсортованим за зростанням, оскільки всі (нульові) сусідні пари цілих чисел задовольняють умові, що ліве число не перевищує праве за значенням.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

// v1

function inAscOrder(arr) {
	if (arr.length <= 1) return true;

	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] > arr[i + 1]) {
			return false
		}
	}

	return true;
}

console.log(inAscOrder([1,2,4,7,19]));
console.log(inAscOrder([1,6,10,18,2,4,20]));
console.log(inAscOrder([9,8,7,6,5,4,3,2,1]));

// v2

function inAscOrder(arr) {
	return arr.every((a, i) => i === 0 || a >= arr[i - 1]);
}

// v3

function inAscOrder(arr) {
  return !arr.some((value, index) => index > 0 && arr[index - 1] > value);
}