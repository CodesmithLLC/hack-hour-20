/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	if(arr.length === 0 || n === undefined || !Array.isArray(arr)) {
		return false;
	}
	for (let i = 0 ; i < arr.length; i++) {
		const num = n - arr[i];
		const test = [...arr.slice(0,i), ...arr.slice(i+1)];
		if(test.includes(num)) return true;
	}
	return false;
}

module.exports = twoSum;
