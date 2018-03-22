/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let collection = [];
    for (let i = 0; i <= array.length-3; i++) {
        let subCol = [];
        subCol.push(array[i]);
        for (let j = i+1; j <= array.length-2; j++) {
            console.log(array[j]);
            let subCol2 = subCol.slice();
            subCol2.push(array[j]);
            console.log(subCol2);
            // subCol = subCol.concat(subCol2);
            // collection.concat(subCol);
            subCol
        }
        
        console.log('subCol', subCol);
        collection.push(subCol)
    }
    


    return collection;

}

console.log(highestProduct([1, 2, 3, 4, 5, 6]));


module.exports = highestProduct;
