/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  //look for 2 negatives
  let sum = 0
  let first = 0
  let second = 0
  for(let i= 0; i < arr.length; i++) {
    if(arr.includes)
    
    sum += arr[i]
    if((arr[i] < 0) && first === 0) {
      first === i
    }
    if((arr[i] < 0) && first !== 0 && second === 0) {
      first === i
      maxSubarray(arr.slice(first, second))
    }
    console.log(sum, first, second, arr[i])
  }
  //iterate from front until 2 negatives
  //if no negatives sum all
  //if one negative at end of array slice off
  //return output
  maxSubarray(arr.slice(1))
}

module.exports = maxSubarray;
