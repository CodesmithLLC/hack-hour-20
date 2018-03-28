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
    let stockArr = stock_prices_yesterday;
    if (!Array.isArray(stockArr)) return 'input is invalid';
    if (stockArr.length < 2) return 'input is invalid';

    let storage = [[stockArr[0],stockArr[1]]];
    let minStack = stockArr[0];
    let maxStack = stockArr[1];

    for (let i = 0; i < stockArr.length; i++) {
     
        if (stockArr[i] < minStack) {
            storage.push([stockArr[i]]);
        }
        // else if (stockArr[i] >  {
        //     maxStack.push([i, stockArr[i]]);
        // }
        console.log('minS', minStack[i]);
        console.log('maxS', maxStack[i]);
    }
    let profit;
    for (let j = 0; j < storage.length; j++) {
        maxStack[maxStack.length - 1][1] - minStack[minStack.length - 1][1];
    }    
    return (profit > 0) ? profit : 0;
}

console.log(bestProfit([105, 150, 110, 95, 100, 140]));


module.exports = bestProfit;
