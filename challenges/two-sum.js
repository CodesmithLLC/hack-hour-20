/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum (arr, n) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let target = n - arr[i];
    if (obj[target]) return true;
    else {
      obj[arr[i]] = true;
    }
  }
  return false;
}

module.exports = twoSum;


let arr = [1, 2, 3, 4, 5];
console.log(twoSum(arr, 9))
