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
	const arr = [1];
	if(numRows === 2) {
		return [[1],[1,1]];
	}
	const prev = pascalTriangle(numRows-1);
	const last = prev[prev.length-1]
	for(let i = 0 ; i < last.length; i++ ) {
		if(i === last.length-1) arr.push(1);
		else {
			arr.push(parseInt(last[i])+parseInt(last[i+1]))
		};
	}
	prev.push(arr)
	return prev;
}

module.exports = pascalTriangle;
