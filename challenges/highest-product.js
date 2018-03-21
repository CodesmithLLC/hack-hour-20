/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	array = array.sort().slice(-3);
	return array.reduce((a,b) => {
		return a*b;
	})
}

module.exports = highestProduct;
