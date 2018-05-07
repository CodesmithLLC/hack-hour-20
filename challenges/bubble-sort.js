// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let count = array.length;
  while (count !== 0) {
    for (let i = 0; i < count - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    count -= 1;
  }
  return array;
}

module.exports = bubbleSort;
