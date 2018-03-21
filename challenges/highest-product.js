/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(arr) {
//   if (!Array.isArray(arr)) return 'invalid input';
//   if (arr.length < 1) return 'invalid input';
//   if (arr.length === 1 && arr[0] === 0) return 0;
//   let savedRes = 1;
//   for (let i = 0; i < arr.length-2; i++) {
//     let attempt = 1; 
//     if (arr[i] !== 0) attempt *= arr[i]
//     if (arr[i+1] !== 0) attempt *= arr[i+1];
//     if (arr[i+2] !== 0) attempt *= arr[i+2];
//     if (attempt > savedRes) savedRes = attempt;
//   }
//   return savedRes;
// }

function highestProduct(arr) {
  if (!Array.isArray(arr)) return 'invalid input';
  if (arr.length < 1) return 'invalid input';
  if (arr.length === 1 && arr[0] === 0) return 0;

  let max1 = Math.max(...arr);
  let index1 = arr.indexOf(max1);
  let newArr1 = arr.filter((x, idx) => idx !== index1)
  let max2 = Math.max(...newArr1);
  let index2 = newArr1.indexOf(max2);
  let newArr2 = newArr1.filter((x, idx) => idx !== index2)
  let max3 = Math.max(...newArr2);
  let product = 1;
  
  if (max1 !== 0) product *= max1;
  if (max2 !== 0) product *= max2;
  if (max3 !== 0) product *= max3;
  return product;
}


console.log(highestProduct([0,3,10]))

module.exports = highestProduct;
