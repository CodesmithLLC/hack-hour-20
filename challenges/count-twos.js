// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos (n, i, twos = 0) {
  for (i = 0; i < n; i++) {
    i.toString().split('').forEach((integer) => {
      if (integer === '2') twos++;
    });
  }
  return i.toString().split('').includes('2') ? twos + 1 : twos;
}

function countTwos2 (n) {

  for (let i = 0; i < n; i++) {

  }
}


console.log(countTwos(1)); // -> 0
console.log(countTwos(3)); // -> 0
console.log(countTwos(13)); // -> 0
console.log(countTwos(1000)); // -> 300
console.log(countTwos(11420)); // -> 4483




module.exports = countTwos;
