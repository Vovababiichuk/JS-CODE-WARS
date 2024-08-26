// function initializeNames(name){
//   const nameArr = name.split(' ');
// 	if (nameArr.length > 2) {
// 		const firstName = nameArr[0];
// 		const lastName = nameArr[nameArr.length -1];
// 		const middleName = nameArr.slice(1, -1);
// 		const middleInitials = middleName.map(el => el[0] + '.').join(' ');

// 		return `${firstName} ${middleInitials} ${lastName}`
// 	}

// 	return name
// }

// console.log(initializeNames('Jack Ryan'));
// console.log(initializeNames('Dimitri'));
// console.log(initializeNames('Alice Betty Catherine Davis'));
// console.log(initializeNames('Lois Mary Lane'));



function initializeNames(name) {
  const nameArr = name.split(' ');
  if (nameArr.length === 1) {
    return name;
  }

  if (nameArr.length === 2) {
    return name;
  }

  if (nameArr.length > 2) {
    const firstName = nameArr[0];
    const lastName = nameArr[nameArr.length - 1];
    const middleNames = nameArr.slice(1, -1);
    const middleInitials = middleNames.map(name => name[0] + '.').join(' ');

    return `${firstName} ${middleInitials} ${lastName}`;
  }
}

console.log(initializeNames('Jack Ryan')); // 'Jack Ryan'
console.log(initializeNames('Dimitri')); // 'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'
console.log(initializeNames('Lois Mary Lane')); // 'Lois M. Lane'
