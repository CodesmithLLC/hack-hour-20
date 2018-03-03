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
  let mean = Math.floor(array.reduce(function(acc,curr){return acc + curr},0)/array.length)
  let mode = 0;
  let obj = array.reduce(function(acc,curr){
    if(curr in acc){
      acc[curr]++;
      return acc;
    } else {
      acc[curr]=1;
      return acc;
    }
  },{})
  for(keys in obj){
    if(obj[keys] >= mode){
      mode = obj[keys]; 
    }
  }
  return mode === mean;
}

module.exports = modemean;
