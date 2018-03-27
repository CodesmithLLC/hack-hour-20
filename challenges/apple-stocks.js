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

function bestProfit(stock_prices_yesterday) {
    if(Array.isArray(stock_prices_yesterday === false) || typeof stock_prices_yesterday[0] !== "number"){
        return 0;
    }
    let highest = 0;
    for(let i = 0; i < stock_prices_yesterday.length; i++){
      for(let j = i; j < stock_prices_yesterday.length; j++){
        if(stock_prices_yesterday[j] - stock_prices_yesterday[i] > highest){
            highest = stock_prices_yesterday[j] - stock_prices_yesterday[i]
        }
      }
    }
    return highest;
}


module.exports = bestProfit;