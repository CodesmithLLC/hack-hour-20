// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


///FIRST ATTEMPT/// O(N^2);
function bubbleSort(array) {
    let foo = array.length
    for(let k = 0; k < array.length; k++ ){
        for(let i = 1, j = 0; i < array.length; i++, j++){
            console.log(`array[i] : ${array[i]} and array[j]: ${array[j]}`);
            if(array[i] < array[j]){
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
            console.log(array);
        }
    }
    return array;
}

// console.log(bubbleSort([5,4,1,3,5, 87, 9, -1, 8, 0]));
module.exports = bubbleSort;

