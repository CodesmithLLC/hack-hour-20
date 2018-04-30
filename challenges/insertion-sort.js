// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {    

    for(let i = 0; i < array.length; i++) {
        let val = array[i]
        for(let a = i-1; a > -1 && array[i] > val; a--) {
            val[a + 1] = array[i]
        }
        array[a + 1] = val
    }
    return array
}
//console.log(insertionSort([5,1,3,5,9,3]))


module.exports = insertionSort;