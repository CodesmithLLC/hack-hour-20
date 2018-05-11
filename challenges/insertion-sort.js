// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		const temp = array[i];
		for(let j = i-1; j >= 0 ; j--) {
			if(temp < array[j]) {
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}

console.log(insertionSort([6,3,4,1,7,8,5,9]));

module.exports = insertionSort;