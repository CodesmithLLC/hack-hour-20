/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3)  undefined;  
  if (array.every((elem) => typeof(elem) !== 'number')) undefined;
  array = array.sort();
  console.log(array.sort);
  console.log('hackkkkker', array.pop(),array.pop(),array.pop())
  return array.pop() * array.pop() * array.pop();
  }

console.log(highestProduct([1,3,-5,8,19]));

module.exports = highestProduct;
