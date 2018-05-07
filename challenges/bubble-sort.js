// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
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
}

module.exports = bubbleSort;
