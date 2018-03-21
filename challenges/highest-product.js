/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(Array.isArray(array) && array.length >= 3){
		array = array.map(num => Math.abs(num)).sort((a,b) => {return a - b;}).slice(-3);
		return array.reduce((a,b) => {
			return a*b;
		})
	} else {
		return 0;
	}

}
console.log(highestProduct([-3,-6,-6,-7,-1,1,23,5,3,1,2,4]));
module.exports = highestProduct;
