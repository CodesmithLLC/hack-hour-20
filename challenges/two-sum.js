/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for(let i = 0; i < arr.length; i+=1) { //loop through first arr[i]
    for(let j = i +1; j < arr.length; j+=1) { //loop through second arr[j]
      if(arr[i] + arr[j] === n) {return true};
    }
  }
  return false
}


console.log(twoSum([0,0], 0))
console.log(twoSum([6,4], 11))
console.log(twoSum([2,3], 4))


module.exports = twoSum;
