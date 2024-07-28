/*!SECTION
Вам задано словник/хеш/об'єкт, що містить деякі мови та результати вашого тестування на цих мовах. Виведіть список мов, на яких ви набрали не менше 60 балів, у порядку спадання.

Зауваження: результати завжди будуть унікальними (тобто ніяких дублікатів)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

// v1

function myLanguages(results) {
	return Object.entries(results).sort((a, b) => b[1] - a[1]).map(([key, value]) => value >= 60 ? key : []).flat();
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }))
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))

// v2


function myLanguages(results) {
	return Object.keys(results).filter(key => results[key] >= 60).sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }))
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))
