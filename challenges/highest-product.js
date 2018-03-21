/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort(function(a,b) {
        return a - b;
      });
      
      let result = 1;
      for (let i =1; i <= 3; i++) {
        result *= array.pop();
      }
      return result;
}


module.exports = highestProduct;
