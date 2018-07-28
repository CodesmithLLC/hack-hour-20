'use strict';

function gcd(a, b) {
  // Everything divides 0
  if (a == 0 || b == 0) return 0;

  // base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  function summation(n) {
    return Math.floor(n) * Math.floor(n + 1) / 2;
  }
  /**
   *  n
   *  Σ n(n+1)/2
   * i=1
   */
  // sum of all numbers less than 1000 divisible by 3
  const xSum = x * summation((z - 1) / x);
  const ySum = y * summation((z - 1) / y);
  const xySum = lcm(x,y) * summation((z - 1) / lcm(x,y));
  const sum = xSum + ySum - xySum;
  return sum;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000);
}

// console.log(sumMultiples3Or5Below1000());
console.log(sumMultiplesXOrYBelowZ(225, 675, 9999999999999999999999));

// Java program to find LCM of two numbers.

// Recursive method to return gcd of a and b


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
