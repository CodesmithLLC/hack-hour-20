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

const fizzbuzz = (n, ret = new Array(n)) => Array.from(ret).map((e, i) => (i % 3 === 0 && i % 5 === 0) ? 'fizzbuzz' : i % 3 === 0 ? 'fizz' : i % 5 === 0 ? 'buzz' : i);

module.exports = fizzbuzz;
