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
  //adds all nums and div by 2
  //var mean = array.reduce((acc, curr) => (acc + curr)%array.length)
  function modemean(array) {
    var mean = 0
    for(var i = 0; i < array.length; i++) {
      mean+=array[i]
    }
  //returns greatest occurence of a num
  var mode;
  //create empty obj with keys as array[i]
  //increment keys by occurrence
  return ((mean%array.length) === mode)
}

module.exports = modemean;
