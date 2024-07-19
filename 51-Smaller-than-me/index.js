/*!SECTION
Напишіть функцію, яка за заданим масивом arr повертає масив, що містить для кожного індексу i кількість чисел, менших за arr[i] праворуч.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

*/

// v1

function smaller(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      result.push(count);
    }
    return result;
  }
  
  console.log(smaller([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
  console.log(smaller([1, 2, 0])); // Output: [1, 1, 0]
  


// v2
// function smaller(nums) {
// 	return nums.map((num, i) =>
//     nums.slice(i + 1).filter(el => el < num).length
// );
// }

// console.log(smaller([5, 4, 3, 2, 1]))


// v3

function smaller(nums) {
    let count;
    let base;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
      base = nums[i];
      count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < base) count++;
      }
      arr.push(count);
    }
    return arr;
  }