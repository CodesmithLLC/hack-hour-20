// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let moveInd = i;
    let checkInd = i - 1;
    while (array[moveInd] < array[checkInd]) {
      let temp = array[moveInd];
      array[moveInd] = array[checkInd];
      array[checkInd] = temp;
      moveInd--;
      checkInd--;
    }
  }
  return array;
}

module.exports = insertionSort;