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
  // array stock_prices_yesterday [ 100, 30, 40 70 , 400, 300]
  // the stock prices are ordered by time in minute increments from 9:30am
  // to get the the best profit we must compute the diffrence form a purchase and sale
  //**the purchase must allow for a sale that yeilds the greatest profit
  
  //input: an array of numbers ordered by min. increments
  //ouput: a number (profit from the sale)
  //
function bestProfit(stock_prices_yesterday) {
    let highestProfit = 0;
    for (let i = 0; i < stock_prices_yesterday.length; i++){
        for (let j = i + 1; j < stock_prices_yesterday.length; j++){
            let profit = (-stock_prices_yesterday[i]) + stock_prices_yesterday[j]
            if ( profit > highestProfit) {
                highestProfit = profit;
            }
        }
    }
    return highestProfit;
}

module.exports = bestProfit;
