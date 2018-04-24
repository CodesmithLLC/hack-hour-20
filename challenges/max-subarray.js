/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let subMax  = 0; 
  let subcurrMax = 0; 
  for(let i = 0; i < arr.length; i++) {
    subMax = Math.max(0, arr[i] + subMax);
    subcurrMax = Math.max(subMax, subcurrMax)
    console.log(subcurrMax, subMax);
  }
}

console.log(maxSubarray([15,20,-5,10]));

module.exports = maxSubarray;
