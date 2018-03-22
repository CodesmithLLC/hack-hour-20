/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // iterate thorugh array to find highest product of two numbers
// once found iterate again to find highest pruduct of previous result.

function highestProduct(array) {
    let productOfTwo;
    let spliceOne;
    let SpliceTwo;
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
                spliceOne = i;
                SpliceTwo = j;
             }
         }
     }
     console.log(SpliceTwo)
     array.splice(spliceOne,1);
     console.log(array,'the array')
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
console.log(highestProduct([-1,-5,-4,-6]))
module.exports = highestProduct;
