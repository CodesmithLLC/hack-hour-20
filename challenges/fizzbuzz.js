// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]


function fizzbuzz (n, arr = []) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push('fizzbuzz');
    else if (i % 3 === 0) arr.push("fizz");
    else if (i % 5 === 0) arr.push('buzz');
    else arr.push(i)
  }
  return arr;
}

// console.log(fizzbuzz(16))

function fizzbuzz2 (n, arr = []) {
  return Array.from(new Array(n + 1), (x,i) => i).map(function (el, i) {
    if (el % 15 === 0) return 'fizzbuzz';
    else if (el % 3 === 0) return "fizz";
    else if (el % 5 === 0) return 'buzz';
    else return el;
  });
}

console.log(fizzbuzz2())


module.exports = fizzbuzz;
