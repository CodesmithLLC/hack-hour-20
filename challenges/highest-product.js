/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let product;
  let firstMax = Math.max(...array);
  //slice the array from the beginning to the start
  //apply the math.max three times to get the max
  let secondArr = array.slice()
  console.log(sortedArr);
  for(let i = 0; i < sortedArr.length; i++) {
    product = sortedArr[0] * sortedArr[1] * sortedArr[2];
  }
  return product;
}

console.log(highestProduct([10, 11, 3, 8]));

module.exports = highestProduct;
