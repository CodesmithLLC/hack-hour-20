/*
 * Given an array of numbers, determine if the mode and mean of the array 
 * are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let counter ={};
    let mode;
    let max = 0;
    let mean;
    let sum = 0;
    
    for(var i = 0; i < array.length; i++){
      sum += array[i];
      if (counter[array[i]] === undefined){
        counter[array[i]] = 0;
      }        
        counter[array[i]] += 1;
    }

    for(var prop in counter){
      if(counter[prop] > max){
        max = counter[prop];
        mode = prop;
      }
    }
    mean = Math.floor(sum / array.length);
    return mode == mean;
}

module.exports = modemean;
