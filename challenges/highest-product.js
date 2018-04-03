/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(Array.isArray(array) && array.length > 3){
		let highest = [];
		let count = 0;
		array = array.sort((a,b) => {return a-b;});
		console.log(array);
		if (array[0] < 0 && array[1] < 0) {
			if(array[0]*array[1]*array[array.length-1] > array.slice(-3).reduce((a,b) => a*b)){
				highest.push(array[0]);
				highest.push(array[1]);
				highest.push(array[array.length-1]);
			} else {	
				highest = array.slice(-3);
			}
		} else {
			highest = array.slice(-3);
		}
		return highest.reduce((a,b) => {return a*b;});
	} else if(Array.isArray(array) && array.length === 3) {
		return array.reduce((a,b) => {return a*b;});
	} else {
		return 0;
	}
}
module.exports = highestProduct;
