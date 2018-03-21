/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3){ 
        return false;
    }
    let newArray = [];
    array.sort((a,b)=> a<b);
    newArray.push(array.shift());
    newArray.push(array.shift());
    newArray.push(array.shift());
    let result = newArray.reduce((acc,curr)=>{
      console.log(acc);
        return acc * curr;
    },1)
    return result;
}



module.exports = highestProduct;
