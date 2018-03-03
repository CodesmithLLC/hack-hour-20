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
    let set = new Set (array);
    set
    let obj = {};
    let theModeKey;
    [...set].forEach(num => {obj[num] = undefined})
     set.forEach(key =>{
        if (obj[String(key)] === undefined) {
          obj[String(key)] = 1;
          console.log(obj[String(key)]);
        } else if (obj[String(key)]) {
          console.log('hello')
            obj[String(key)] = +1
            if (obj[String(key)] > obj[theModeKey]) {
               theModeKey = String(key);
            }
        }
    });
}


module.exports = modemean;
