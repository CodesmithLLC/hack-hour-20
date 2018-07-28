/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

 // Kadane's Alg: maxDiff[i] = max(A[i], A[i] - maxDiff[i-1])
 // [5, 3, 6, 1]
/**
 * i = 0 --> max(5)        => maxSum[0] = 5
 * i = 1 --> max( 2, 2+ -1)  => maxSum[1] = 2
 * i = 2 --> max( 3, 3 + 2)  => maxSum[2] = 5
 * i = 3 --> max(-4, -4 + 5) => maxSum[3] = 1
 */

// brute force
function bestProfit1(arr) {
  if (arr.length <= 1) return 0;
  let overallDiff = 0;
  for (let i = arr.length-1; i >= 0; i--) {
      for (let j = i-1; j>=0; j--) {
          if (arr[i] > arr[j] && (Math.abs(arr[i] - arr[j])) > overallDiff) {
            console.log(`${arr[i]} - ${arr[j]} = ${arr[i] - arr[j]}`)
              overallDiff = arr[i] - arr[j];
          }
      }
  }
  return Math.abs(overallDiff);
}

function bestProfit2(arr) {
  if (arr.length <= 1) return 0;
  let profit = 0;
  let cheapest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    cheapest = Math.min(cheapest, arr[i]);
    profit = Math.max(profit, arr[i] - cheapest);
  }
  return profit;
}

console.log(bestProfit2([7,1,5,3,6,4]));

// let myArr = [10, 20, 30, 40, 20, 330, 40, 5]
// console.log(bestProfit([10, 20, 30, 40, 20, 330, 40, 5]));
// console.log(bestProfit([0, 10, 0, 15, 11, 0, 0, 0]));
// console.log(bestProfit([10, 5, 0, 0, 0, 0, 0, 0]));
// console.log(bestProfit(['hello', 'bye']));

module.exports = bestProfit;
