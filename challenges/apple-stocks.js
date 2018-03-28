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

function bestProfit(spy) {
if(!Array.isArray(spy)) return 0;
let profit = 0;
let smallest = spy[0];
  for(let i = 1; i < spy.length; i++) {
    profit = Math.max(profit, (spy[i] - smallest));
    if(smallest > spy[i]) smallest = spy[i];
  }
  return profit;
}

module.exports = bestProfit;