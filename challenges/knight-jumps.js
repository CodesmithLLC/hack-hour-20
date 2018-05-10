// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let pos = str.replace(' ', '').replace('(', '').replace(')', '')
  let moves = [[2, 3, 4, 4, 4, 4, 3, 2],
  [3, 4, 6, 6, 6, 6, 4, 3],
  [4, 6, 8, 8, 8, 8, 6, 4],
  [4, 6, 8, 8, 8, 8, 6, 4],
  [4, 6, 8, 8, 8, 8, 6, 4],
  [4, 6, 8, 8, 8, 8, 6, 4],
  [3, 4, 6, 6, 6, 6, 4, 3],
  [2, 3, 4, 4, 4, 4, 3, 2]]
  return moves[pos[0]-1][pos[1]-1];
}

module.exports = knightjumps;
