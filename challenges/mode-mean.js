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
  let obj = {};
  let theModeKey = 0;
  [...set].forEach(num => {obj[num] = undefined});

   array.forEach(key =>{
      if (obj[key] === undefined) obj[String(key)] = 1;
      else if (obj[key]) {
          obj[key]++;
          if(!obj[theModeKey]) theModeKey = key;
          if (obj[key] > obj[theModeKey] ) theModeKey = key;
          if(obj[key] === obj[theModeKey] && key > theModeKey) theModeKey = key;
      }
  });
  
  return Math.floor(array.reduce((acc, cur) => {
    return acc + cur;
  })/array.length) === theModeKey;
}


module.exports = modemean;
