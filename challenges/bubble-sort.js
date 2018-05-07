// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for(let i = 0; i < array.length; i++)  {
    for(let j = 0; j < (array.length - 1); j++) {
      let elem = array[j];
      if(array[j] > array[j+1]){
        array[j] = array[j+1];
        array[j+1] = elem;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,3,4,6,-1,2]))
module.exports = bubbleSort;
