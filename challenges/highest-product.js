/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3 || !Array.isArray(array)) return 0; 
    let negNumbers = []; 
    array.forEach(e => {
        if(e < 0){
           negNumbers.push(Math.abs(e)); 
        }
    });

    array.sort((a,b) => a - b);

    if(negNumbers.length > 1){
        
    }

}





console.log(highestProduct([1,5,3,-2,10])); 

module.exports = highestProduct;
