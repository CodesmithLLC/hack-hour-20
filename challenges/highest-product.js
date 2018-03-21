/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // iterate thorugh array to find highest product of two numbers
// once found iterate again to find highest pruduct of previous result.

function highestProduct(array) {
    let productOfTwo;
    let productOfThree;
    if (Array.isArray(array) && array.length >2){ 
     for (let i = 0; i < array.length; i++){
         for ( let j = i + 1; j < array.length; j++){
             if (!productOfTwo) {
                 productOfTwo = array[i] * array[j] 
                 continue;
             }
             if ((array[i]* array[j]) > productOfTwo){
                productOfTwo = (array[i]* array[j]);
             }
         }
     }
     for (let k = 0; k < array.length; k++){
        if (!productOfThree) {
            productOfThree = productOfTwo * array[k] 
            continue;
        }
         if (productOfTwo * array[k] > productOfThree) {
             productOfThree = productOfTwo * array[k]
         }
     }
     return productOfThree;
    } else {
        return 0;
    }
}
module.exports = highestProduct;
