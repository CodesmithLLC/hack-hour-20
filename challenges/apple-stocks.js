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

function bestProfit(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 0;
    let maxI = 0;
    let min = 0;
    let minI = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max && maxI < i) {
            max = arr[i];
            maxI = i;
        }
        else if (arr[i] < min && i < maxI && minI < i) {
            min = arr[i];
            minI = i;
        }
        // console.log('min', min, 'max', max)
    }
    let result = (arr[maxI] - arr[minI]);
    if (result < 0) return 0;
    return result;
}
// let myArr = [10, 20, 30, 40, 20, 330, 40, 5]
console.log(bestProfit([10, 20, 30, 40, 20, 330, 40, 5]));
console.log(bestProfit([0, 10, 0, 0, 0, 0, 0, 0]));
console.log(bestProfit([10, 5, 0, 0, 0, 0, 0, 0]));
// console.log(bestProfit(['hello', 'bye']));

module.exports = bestProfit;
