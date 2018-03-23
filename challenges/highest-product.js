/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3)  0;  
  if (array.every((elem) => typeof(elem) !== 'number')) 0;
  array = array.sort(); // sort all of the numbers in the array
  //console.log('dsdslkmds',array.sort()); //check to see if sort is working 
  //console.log('hackkkkker', array.pop(),array.pop(),array.pop())
  return array.pop() * array.pop() * array.pop();
  }

console.log(highestProduct([1,3,-5,8,19]));

module.exports = highestProduct;
