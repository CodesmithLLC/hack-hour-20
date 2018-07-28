// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort1(array) {
  let sorted = false;
  let tmp;
  while (sorted !== true) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
        sorted = false;
      }
    }
  }
  return array;
}

function bubbleSort2(array) {
  let tracker = 0;
  let tmp;
  while (tracker < array.length) {
    for (let i = 0; i < array.length - tracker; i++) {
      if (array[i] > array[i + 1]) {
        tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
    console.log(array);
    tracker++;
  }
  return array;
}

module.exports = bubbleSort;

console.log(bubbleSort([12, 4, 2, 6, 3, 5, 8, 10, 9]));
