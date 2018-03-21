/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) {
    return 0;
  }
  let max;
  let firstInd;
  let secondInd;
  let posCount = 0;
  let negArr = [];
  for (let h = 0; h < array.length; h++) {
    if (array[h] > 0) {
      posCount++;
    } else {
      negArr.push(array[h]);
    }
  }
  if (posCount >= 3 || array.length === 3) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let curProd = array[i] * array[j];
      if (curProd > max || max === undefined) {
        max = curProd;
        firstInd = i;
        secondInd = j;
      }
    }
  }
  } else {
    let highNeg;
    let secondNeg;
    for (let g = 0; g < negArr.length; g++) {
      if (Math.abs(negArr[g]) > highNeg || highNeg === undefined){
        secondNeg = highNeg;
        highNeg = Math.abs(negArr[g]);
      } else if (Math.abs(negArr[g]) > secondNeg || secondNeg === undefined) {
        secondNeg = Math.abs(negArr[g]);
      }
    }
    max = highNeg * secondNeg;
  }
  let third;
  for (let k = 0; k < array.length; k++) {
    if (array[k] > third || third === undefined) {
      if (k !== firstInd && k !== secondInd) {
        third = array[k];
      }
    }
  }
  return max * third;
}


module.exports = highestProduct;
