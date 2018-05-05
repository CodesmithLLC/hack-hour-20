/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  //Initialize a counter for number of circles to traverse
  let count = 0;
// Identify which circles the person is starting at
  for (let i = 0; i < x.length; i += 1) {
    const d1 = Math.hypot(x[i] - start_x, y[i] - start_y);
    const d2 = Math.hypot(x[i] - end_x, y[i] - end_y);
  }
// Identify how many circles surround the end location
// Find the best way to traverse from start to finish
}

module.exports = circleCountry;
let a = [1,4,6,7,8];
let b = [2,3,4,5,6];
let c = [2,4,4,3,2];
console.log(circleCountry(a, b, c, 1, 1, 10, 10));
