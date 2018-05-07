/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
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

///First try ///
function findName(jazbook, name) {
  for(let i = 0; i < jazbook.length; i++){
    let entry = jazbook[i];
    if(entry.includes(name))return entry[1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let newObj = {}
  //put jazbook in alphabetic order
  let orderedJazbook = jazbook.sort();
  //populate this.storage.jazbook with new a linked list in order
  newObj.storage = {}
  orderedJazbook.forEach(e => {
    newObj.add(e);
  })
  //add method on this to add
  newObj.add = function(val){
    //add functionality here
  }
  //add method on this to remove
  newObj.remove = function (val){
    //remove functionality here
  }
  console.log(orderedJazbook, ' < === here ');
  //return a linked list or something {} that has methods on it
}

function Node(value) {
  this.val = value;
  this.next = null;
  this.prev = null;
}


//tests
jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

makePhoneBookObject(jazbook);
// console.log('===these shold be a number===');
// console.log(findName(jazbook, 'alex'));
// console.log(findName(jazbook, 'jae'));
// console.log(findName(jazbook, 'david'));
// console.log(findName(jazbook, 'travis'));
// console.log(findName(jazbook, 'jasmine'));
// console.log('===these shold be false===');
// console.log(findName(jazbook, 'phillip'));
// console.log(findName(jazbook, 'ben'));
// console.log(findName(jazbook, 'will'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
