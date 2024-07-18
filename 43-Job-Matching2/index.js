/*!SECTION

Розглянемо систему підбору, яка призначена для постійного пошуку роботи для розробників програмного забезпечення. Чим більше якісних вакансій потрапляє до системи, тим більше їх буде підібрано для всіх зареєстрованих розробників, надаючи їм кращі можливості щодня.

Це означає, що десь у системі є функціонал, який дозволяє знайти роботу та зіставити її із зареєстрованими кандидатами. Існує кілька факторів, які впливають на таке співставлення, але для цілей цієї статті ми зосередимось на двох.

Створіть функцію зіставлення, яка приймає вакансію і фільтрує список кандидатів до тих, які відповідають вакансії. Ми зосередимося на двох властивостях для цієї Ката: капітал і місцезнаходження.

Власний капітал
Кандидат має властивість equity (boolean), яка вказує на те, чи бажає він мати власний капітал, в той час як вакансія має властивість max equity (float), що представляє максимальну суму запропонованого власного капіталу. Якщо максимальний капітал дорівнює нулю, ми можемо зробити висновок, що не пропонується ніякого капіталу. Вакансія буде збігатися, якщо кандидат не бажає отримати власний капітал, але вакансія його не пропонує.

Місцезнаходження
Кандидат матиме дві властивості місцезнаходження: поточне місцезнаходження та бажане місцезнаходження. Вакансія може бути розташована в декількох місцях, що буде відображено у властивості location. Збіг - це коли вакансія знаходиться або в поточному місцезнаходженні кандидата, або в будь-якому з бажаних місцезнаходжень кандидата.

Таким чином, список кандидатів може виглядати так:
let candidates = [{
  desiresEquity: true,
  currentLocation: 'New York',
  desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
}, ...];

А робота може виглядати так:
let job = {
  equityMax: 1.2,
  locations: ['New York', 'Kentucky']
}
*/

// v1

let candidates = [{
  desiresEquity: true,
  currentLocation: 'New York',
  desiredLocations: ['San Francisco', 'Los Angeles']
}, {
  desiresEquity: false,
  currentLocation: 'San Francisco',
  desiredLocations: ['Kentucky', 'New Mexico']
}];

let job1 = {
  equityMax: 0,
	locations: ['Los Angeles', 'New York']
}

let job2 = {
  equityMax: 1.2,
	locations: ['New York', 'Kentucky']
}

function match(job, candidates) {
  return candidates.filter(candidate => {
    const equityMatch = candidate.desiresEquity ? job.equityMax > 0 : true;

    const locationMatch =
      job.locations.includes(candidate.currentLocation) ||
      candidate.desiredLocations.some(location => job.locations.includes(location));

    return equityMatch && locationMatch;
  });
}

console.log(match(job1, candidates));
console.log(match(job2, candidates));

// v2

const equityMatch = function(candidate, job) {
	return candidate.desiresEquity === false || job.equityMax > 0;
}

const locationMatch = function(candidate, job) {
	for (const location of job.locations) {
			if (candidate.desiredLocations.includes(location) || candidate.currentLocation === location) {
					return true;
			}
	}

	return false;
}

const match = function(job, candidates) {
	const matches = [];
	for (const candidate of candidates) {
			if (equityMatch(candidate, job) && locationMatch(candidate, job)) {
					matches.push(candidate);
			}
	}

	return matches;
}
