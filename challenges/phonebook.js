/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
**/
const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];
/**
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(arr, name) {
  let result = false;
  let res;
  for (let i = 0, j = arr.length - 1; i < Math.floor(arr.length / 2); i += 1, j -= 1) {
    if (arr[i][0] === name) {
      result = true;
      res = arr[i][1];
    }
    if (arr[j][0] === name) {
      result = true;
      res = arr[j][1];
    }
    if (result) break;
  }
  return result ? res : result;
}
console.log(findName(jazbook, 'alex'));
// return an object literal representing the jazbook
function makePhoneBookObject(arr) {
  const result = {};
  arr.forEach(([name, num]) => {
    result[name] = num;
  });
  return result;
}
console.log(makePhoneBookObject(jazbook));
const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
