/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
//mode: comes up the most 
//mean: average. 

function modemean(array) {
    let obj = {}; 
    let greatestInstances = 0
    let mostFrequentElem = 0
    let total = 0; 
    array.forEach(e=>{
        total += e;
        
        if(obj.hasOwnProperty(e)){
            obj[e]++;
            
        }else{
            obj[e]=1; 
        }
        
        if(obj[e] >= greatestInstances){
            if(e > mostFrequentElem){
                mostFrequentElem = e
            }
            greatestInstances = obj[e];
        }
       
    }); 
    let mean = Math.floor(total / array.length)
    console.log(obj);
    console.log({mean, mostFrequentElem}) 
    // console.log({mean,mostFrequent})
    return mean === mostFrequentElem;
    // console.log({mean}); 
    // console.log({mostFrequent}); 
}


console.log(modemean([1,2,3,3,5,5,7]));//--> mode:3, mean:4
module.exports = modemean;
// console.log((...obj)=>{
// console.log(obj)
// })

