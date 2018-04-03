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

function fizzbuzz(num) {
// Practice adding new branch and merging
  let result = [];
  const div1 = 3;
  const div2 = 5;
  const div3 = div1*div2;
  for (var i = 1; i <= num; i++) {
    if (i % div3 == 0) {
      result.push('fizzbuzz');
    }
    else if (i % div1 == 0) {
      result.push('fizz');
    }
    else if (i % div2 == 0) {
      result.push('buzz');
    }
    else {
      result.push(i);
    }
  }
  return result;

  // let result = [];
  // let curr = '';
  // for (var i = 1; i <= num; i++) {
  //   if (i % 3 == 0) {
  //     curr += 'fizz';
  //   }
  //   if (i % 5 == 0) {
  //     curr += 'buzz';
  //   }
  //   else {
  //     curr = i;
  //   }
  //   result.push(curr);
  //   curr = '';
  // }
  // return result;
  // The reason why the second code is not working is because else statement runs after 
  // second if statement, reassigning value of curr
}

// console.log(fizzbuzz(16));



module.exports = fizzbuzz;
