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
  let negArr = [];
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] < 0){
     negArr.push(Math.abs(newArr[i]));
    }
  }
  if(negArr.length < 2){
    return  Math.abs(newArr[newArr.length-1] * newArr[newArr.length-2] * newArr[newArr.length-3]);
  }else{
    if(negArr[0] > newArr[newArr.length-1]){
      return Math.abs(newArr[newArr.length-1] * negArr[0] * negArr[1]); 
    }
  }
}


module.exports = highestProduct;