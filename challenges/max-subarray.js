/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// 280 ms
function maxSubarray1(arr) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}
console.log(maxSubarray1([-1, 2, 3, -4]));

// Original
/**
 * i = 0 --> max( sum(-1) )
 * i = 1 --> max( sum(2), sum(2, -1) )
 * i = 2 --> max( sum(3), sum(3, 2), sum(3, 2, -1) )
 * i = 3 --> max( sum(-4), sum(-4, 3), sum(-4, 3, 2), sum(-4, 3, 2, -1) )
 */

// Kadane's Alg: maxSum[i] = max(A[i], A[i] + maxSum[i-1])
/**
 * i = 0 --> max(-1)        => maxSum[0] = -1
 * i = 1 --> max( 2, 2+ -1)  => maxSum[1] = 2
 * i = 2 --> max( 3, 3 + 2)  => maxSum[2] = 5
 * i = 3 --> max(-4, -4 + 5) => maxSum[3] = 1
 */

// 88 ms
function kadane1(arr) {
  let maxSum = arr[0];
  let globalMax = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    maxSum = Math.max(arr[i], arr[i] + maxSum);
    if (maxSum > globalMax) globalMax = maxSum;
  }
  return globalMax;
}

// 60 ms
function kadane2(arr) {
  let sum = 0;
  let neg = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (sum < 0) neg = Math.min(sum, neg);
    sum += arr[i];
    max = Math.max(max, sum);
    if (neg < 0) max = Math.max(max, sum - neg);
  }
  return max;
}
console.log(kadane1([-1, -2])); // Should be -1
console.log(kadane1([-1, 2, 3, -4])); // Should be 5
console.log(kadane2([-1, 2, 3, -4])); // Should be 5

console.log(kadane1([1, -2, 3, 10, -4, 7, 2, -5])); // Should be 18 
console.log(kadane2([15, 20, -5, 10])); // Should be 40

module.exports = maxSubarray;
