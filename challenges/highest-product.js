/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // iterate thorugh array to find highest product of two numbers
// once found iterate again to find highest pruduct of previous result.
function highestProduct(array) {
    let productOfTwo = 0;
    let productOfThree = 1;
     for (let i = 0; i < array.length; i++){
         for ( let j = i + 1; j < array.length; j++){
             if ((array[i]* array[j]) > productOfTwo){
                productOfTwo = (array[i]* array[j]);
             }
         }
     }

     for (let k = 0; k < array.length; k++){
         if (productOfTwo * array[k] > productOfThree) {
             productOfThree = productOfTwo * array[k]
         }
     }
     return productOfThree;
}

module.exports = highestProduct;
