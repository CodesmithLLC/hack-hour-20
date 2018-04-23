/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (arr.length <= 1) return false;  
    console.log('arr', arr, 'n', n);
    for (let i = 1; i < arr.length; i++) {
      console.log(arr[0], 'and', arr[i])
      if (arr[0] + arr[i] === n) return true;
    }
    return twoSum(arr.splice(1), n)
  }

module.exports = twoSum;
