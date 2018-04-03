/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
//does not solve for negative nums
  if(arr.length <= 1) return false
  var shifted = arr.shift()
  //console.log(shifted, arr)
  for(var i = 0; i < arr.length; i++) {
    if(target - arr[i] === shifted) console.log(arr[i])
  }
  twoSum(arr, target)
}

module.exports = twoSum;
