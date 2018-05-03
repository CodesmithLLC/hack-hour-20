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
  let num = 0, newObj = {}, max = 0, maxItem = 0;
    for(let i = 0; i < array.length; i++){
      num += array[i];  
      newObj[array[i]]= -~newObj[array[i]];
      if(newObj[array[i]] >= maxItem){
        if(array[i] > max){
            max = array[i];
        }
        maxItem = newObj[array[i]];
      }
    }
    let mean = Math.floor(num / array.length);
    return max === mean;
}
module.exports = modemean;
