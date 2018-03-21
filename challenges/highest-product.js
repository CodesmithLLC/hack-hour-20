/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let newArray = [];
    let result;
    if(array.length < 3 || !Array.isArray(array)){ 
        return 0;
    }
    array.sort((a,b)=> a<b);
    newArray.push(array.shift());
    newArray.push(array.shift());
    newArray.push(array.shift());
    result = newArray.reduce((acc,curr)=>{
        return acc * curr;
    },1);
    return result;
}



module.exports = highestProduct;
