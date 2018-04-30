// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for(let i = array.length-1; i >= 0; i--) {
		array.forEach((num, i) => {
			if(array[i+1] < num && i < array.length-1) {
				const temp = array[i+1];
				array[i+1] = num;
				array[i] = temp;
			}
		})
	}
	return array;
}


module.exports = insertionSort;