/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3){
    return 0;
  }
  if(!Array.isArray(array)){
    return 0;
  }
  //Can only take two negative numbers if they are greater than the positive integers
  let newArr = array.sort((a,b) => a - b);
  const lastThree = newArr.slice(-3).reduce((a,b) => a * b);
  const otherThree = [...newArr.slice(0,2),...newArr.slice(-1)].reduce((a,b) => a * b);
  return Math.max(lastThree,otherThree);
}


module.exports = highestProduct;