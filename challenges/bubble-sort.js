// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = array.length; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
        count++;
      }
    }
    if (count === 0) {
      return array;
    }
  }
}
module.exports = bubbleSort;
