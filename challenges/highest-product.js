/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */



function highestProduct (arr, end = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length < 3) return 0
  const sorted = arr.sort();
  return Math.max(sorted[0] * sorted[1] * sorted[end], sorted[end - 2] * sorted[end - 1] * sorted[end]);
}

function highestProduct2 (arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0
  const sorted = arr.sort();
  const end = arr.length - 1;
  // first two NEGATIVE numbers, and highest POSTIVE number
  let case1 = sorted[0] * sorted[1] * sorted[end];
  // last three POSITIVE numbers in array
  let case2 = sorted[end - 2] * sorted[end - 1] * sorted[end];
  return Math.max(case1, case2);
}

console.log(highestProduct("not an Array"))
console.log(highestProduct([1, 2]))
console.log(highestProduct([-5, -4, 1, 2, 3, 4]))

module.exports = highestProduct;
