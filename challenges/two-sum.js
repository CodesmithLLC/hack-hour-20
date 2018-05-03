/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
   if (newObj[arr[i]]) {
    return true;
   } else {
    newObj[n - arr[i]] = 1;
   }
  }
  return false;
}

module.exports = twoSum;


console.log(twoSum([3, 6, 11, 4], 3))