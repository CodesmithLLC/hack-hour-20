// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let runAgainjust = true;
    let placeholder = 0;
    while(runAgainjust){
        runAgainjust = false;
        for( let i = 1; i < array.length; i++){
            if(array[i] < array[i-1]){
                placeholder = array[i];
                array[i] = array[i-1];
                array[i-1] = placeholder;
                runAgainjust = true;
            }
        }
    }
    return array
}

console.log(insertionSort([5,4,3,2,1]))

module.exports = insertionSort;