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
	let min = stock_prices_yesterday[0];
	let max = 0;
	if(!Array.isArray(stock_prices_yesterday)) return 0;
	stock_prices_yesterday.slice(1).forEach((price,i) => {
		if (typeof price !== 'number') return 0; 
		price < min ? min = price : min = min;
		price > max ? max = price: max = max;
	})
	return max < min ? 0 : max-min;
}
console.log(bestProfit([1,2,3,4,5,6,7,8,9,100000,10,1000000]))
module.exports = bestProfit;
