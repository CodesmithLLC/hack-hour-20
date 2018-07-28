/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let result;
  let i = 0;
  while (i < numRows) {
    if (i === 0) {
      result = [[1]];
    } else {
      for (let j = 0; j < result[i-1].length; j++) {
        console.log(result[i][j] + result[i][j-1]);
      }
    }
    i++;
  }
  return result;
}

console.log(pascalTriangle(2));

module.exports = pascalTriangle;
