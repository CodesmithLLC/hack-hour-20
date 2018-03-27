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

function bestProfit(prices) {
	let min = prices[0];
	let max = 0;
	let profits = [];
	if(!Array.isArray(prices)) return 0;
	for (let i = 1; i < prices.length; i++){
		if (typeof prices[i] !== 'number'|| prices[i] <= 0) {
			profits = [0];
			break;
		} 
		if( prices[i] < min ) {
			profits.push(max-min);
			min = prices[i];
			max = 0;
		}
		if (prices[i] > max) {
			max = prices[i];
			profits.push(max-min);
		}
	}
	return profits.reduce((a,b) => { return a > b ? a : b });
}

console.log(bestProfit([100,300,200,500,600,700,800,200,300,500,600]))
module.exports = bestProfit;
