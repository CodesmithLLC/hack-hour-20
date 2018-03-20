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

const fizzbuzz = num => {
  if (typeof num !== 'number') return "invalid input";
  const arr = [];
  for (let i = 1; i < num+1; i++) {
    let f = i % 3 === 0, b = i % 5 === 0
      f? b? arr.push('fizzbuzz') : arr.push('fizz') : b? arr.push('buzz') : arr.push(i);
  };
  return arr;
};

console.log(fizzbuzz(10));
console.log(fizzbuzz(20));
/*
const fizzbuzz = num => {
  if (typeof num !== 'number') return "invalid input";
  const arr = [];
  for (let i = 1; i < num+1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
      arr.push('fizz')
    }
    else if (i % 5 === 0) {
      arr.push('buzz')
    }
    else {
      arr.push(i);
    }
  }
  return arr;
}

const fizzbuzz = num => {
  if (typeof num !== 'number') return "invalid input";
  const arr = [];
  let i = 1;
  while (i < num+1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
      arr.push('fizz')
    }
    else if (i % 5 === 0) {
      arr.push('buzz')
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
*/

module.exports = fizzbuzz;
