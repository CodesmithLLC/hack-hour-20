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


function modemean(array) {
    let mean = Math.floor((array.reduce((acc,curr) => {return acc + curr}))/array.length);
    console.log(mean);
    let mode = {};

}

console.log(modemean([2,3,4,5]))
module.exports = modemean;
