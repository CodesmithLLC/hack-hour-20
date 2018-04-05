/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean (arr, sum = 0) {
  const mode = arr.reduce((a, b) => arr.filter(md1 => md1 === a).length > arr.filter(md2 => md2 === b).length ? a : b);
  const mean = arr.reduce((sum, el) => sum += el) / arr.length;
  return mode === Math.floor(mean);
}

module.exports = modemean;


console.log(modemean([1,2,3,3,10])) // mode = 3, mean = 3.8 --> should return true
