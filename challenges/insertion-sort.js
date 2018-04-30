// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    for(let j = 0; j < i; j++) {
      if(array[i] < array[j]) {
        let tempV = array.splice(i,1);
        //console.log('hello', tempV);
        array.splice(j,0,tempV[0]);
      }
    }
  }
  return array;
}

console.log(insertionSort([1,3,4,2]));

module.exports = insertionSort;