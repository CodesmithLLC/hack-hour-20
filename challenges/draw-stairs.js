//////////////////
///Needs Review///
//////////////////

/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/


//refactor #1
// function drawStairs(n){
//     let result = "";
//     let space = " "
//     let star = "*";
//     let newLine = "\n";
//     for(let i = 1; i <= n; i++){
//         result +=space.repeat(n-i);
//         result += star.repeat(i);
//         result += newLine;
//     }//end of forLoop
//     return result;
// }



// console.log(drawStairs(6));


// module.exports = drawStairs;


//////////////////////////////////////////////////////////////////////
//Just some simple recurrsion practice
function sum(...args) {
    //base case
    if (args.length === 2) {
        return args[0] + args[1];
    }
    return sum(args[0] + args[1], ...args.slice(2))
}
// console.log(sum(1,2,3,4));//===> shold be 10


//first try
// function drawStairs(n) {
//     //create the starting point with enough spaces before the *
//     let startPoint = "*";
//     for(let i = 1; i < n; i++){
//         startPoint = " ".concat(startPoint);
//     }
//     // log the first point
//     console.log(startPoint);
//     //create a starting point array so its muteable
//     let newSP = startPoint.split("");
//     //traverse through array and add * the console.log
//     for(let i = 1; i<n; i ++){
//         newSP.shift();
//         newSP.push("*")
//         console.log(newSP.join(""));
//     }
// }


//refactor #2 (recurssive);
function drawStairs(n, counter = 0, carryover = '') {
    console.log({n, counter, carryover});
    //base case
    if(counter === n){
        return carryover;
    }
    console.log({n, counter})
    console.log(n-counter-1, 'here');
    const addStar = (str, wsCount, starCount) => {
        //?????*\n????**\n???***\n??****\n?*****\n******\n
        str += '?'.repeat(wsCount); //?????
        str += '*'.repeat(starCount);//*
        str += '\n';
        return str.substring(1);
    }

    return drawStairs(n, ++counter, addStar(carryover, n - counter - 1, counter + 1));
}


console.log(drawStairs(6))