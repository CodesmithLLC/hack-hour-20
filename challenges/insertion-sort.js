// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    let j = i;
    let tmp;
    while (array[j] < array[j - 1]) {
      tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j--;
    }
    i++;
  }
  return array;
}

const test1 = [1, 4, 3, 7, 4, 8, 2];
const test2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertionSort(test1));
console.log(insertionSort(test2));

module.exports = insertionSort;
