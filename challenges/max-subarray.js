/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sub = arr.slice(i, j + 1);
      let subsum = 0;
      for (let k = 0; k < sub.length; k++) {
        subsum += sub[k];
      }
      if (!max || subsum > max) {
        max = subsum;
      }
    }
  }
  return max;
}

module.exports = maxSubarray;