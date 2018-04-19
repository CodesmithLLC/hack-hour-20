/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let result = 0;
	array.forEach((num, i) => {
			if(array.slice(i+1).includes(num)) result = num;
		})
	return result;
}
module.exports = repeatNumbers;
