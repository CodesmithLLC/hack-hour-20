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
// Mode section
  var modeNum = 0;
  var modeVal;
  for (var k = 0; k < array.length; k++) {
    var matchNum = array[k];
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === matchNum) {
        count++;
      }
    }
    if (count > modeNum) {
      modeNum = count;
      modeVal = matchNum;
    } else if (count === modeNum) {
      if (matchNum > modeVal) {
        modeVal = matchNum;
      }
    }
  }

// Mean section  
  var sum = 0;
  for (var j = 0; j < array.length; j++) {
    sum = sum + array[j];
  }
  var mean = sum / array.length
  
// Comparing
  if (modeVal === Math.floor(mean)) {
    return true;
  } else {
    return false;
  }
  
}

module.exports = modemean;
