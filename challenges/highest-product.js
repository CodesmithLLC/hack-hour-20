/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  var highest = 1;
  // var product = 1;
  var numArr = []
  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
      numArr.push(array[i])
    }
  }
  var sorted = numArr.sort(function(x,y) {
    return x-y
  })
  if(sorted.length >= 3) {
  for(var a = sorted.length-1; a > 0; a--) {
    highest = (sorted[a] * sorted[a-1] * sorted[a-2])
    return highest
  }
  } else return 0
console.log(sorted)
}


module.exports = highestProduct;
