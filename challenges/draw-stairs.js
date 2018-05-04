//////////////////////
///Review Completed///
//////////////////////

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

/////first attempt/////

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

/////refactor #1/////

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

/////refactor #2 (recurssive)/////
// function drawStairs(n, counter = 0, carryover = '') {
//     //base case
//     if (counter === n) {
//         return carryover;
//     }
//     const addStar = (str, wsCount, starCount) => {
//         //?????*\n????**\n???***\n??****\n?*****\n******\n
//         str += ' '.repeat(wsCount);
//         str += '*'.repeat(starCount);
//         str += '\n';
//         return str;
//     }
//     return drawStairs(n, ++counter, addStar(carryover, n - counter, counter));
// }

/////CS SOLUTIONS/////
//optimized for time
// function makeSpaceArray(character, x) {
//     var str = [];
//     for (var i = 0; i < x; i++) {
//       str.push(character);
//     }
//     return str;
//   }
//   function drawStairs(n) {
//     var arr = makeSpaceArray(' ', n);
//     while (n > 0) {
//       arr[--n] = '*';
//       console.log(arr.join(''));
//     }
//   }

//   //optimized for space
//   function drawStairs(n) {
//     for (var i = 0; i < n; i++) {
//       for (var j = 0; j < n; j++) {
//         process.stdout.write(j + i + 1 >= n ? '*' : ' ');
//       }
//       process.stdout.write('\n');
//     }
//   }
//   //optimized for both
//   function drawStairs(n) {
//     for (var i = 1; i <= n; i++) {
//       var spaces = ' '.repeat(n - i);
//       var splats = '*'.repeat(i);
//       console.log(spaces + splats);
//     }
//   }

console.log(drawStairs(6));
module.exports = drawStairs;


//////////////////////////////////////////////////////////////////////
//Just some simple recurrsion practice
// function sum(...args) {
//     //base case
//     if (args.length === 2) {
//         return args[0] + args[1];
//     }
//     return sum(args[0] + args[1], ...args.slice(2))
// }
// console.log(sum(1,2,3,4));//===> shold be 10