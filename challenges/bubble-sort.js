// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {    
    let flag = false
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let placeholder = array[i]
            array[i] = array[i + 1]
            array[i + 1] = placeholder
            flag = true
        }
    }
    if(flag === true) {
        return bubbleSort(array)
    } else if(flag === false) return array
}
//console.log(bubbleSort([3,65,8,1,2,5,9]))

module.exports = bubbleSort;
