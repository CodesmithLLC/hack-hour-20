/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct (arr) {
  const sorted = arr.sort();
  const end = arr.length - 1;
  // first two NEGATIVE numbers, and highest POSTIVE number
  let case1 = arr[0] * arr[1] * arr[end];
  // last three POSITIVE numbers in array
  let case2 = arr[end - 2] * arr[end - 1] * arr[end];
  return Math.max(case1, case2);
}




module.exports = highestProduct;
