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
function findName(jazbook, name) {
  const length = jazbook.length;
  for (
    let i = Math.floor(length / 2), j = Math.ceil(length / 2);
    i >= 0, j < length;
    i--, j++
  ) {
    if (jazbook[i][0] === name) return jazbook[i][1];
    if (jazbook[j][0] === name) return jazbook[j][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  this.obj = {};
  jazbook.sort((a, b) => {
		if(a[0] < b[0]) return -1;
		if (a[0] > b[0]) return 1;
		return 0
	});
  jazbook.forEach(entry => {
    this.obj[entry[0]] = entry[1];
  });
}

makePhoneBookObject.prototype.add = function(name, num) {
  const newObj = {};
  Object.keys(this.obj).forEach((fname, i) => {
    newObj[fname] = this.obj[fname];
    if (name > fname && name < Object.keys(this.obj)[i + 1]) {
      newObj[name] = num;
    }
	});
	this.obj = newObj;
};

makePhoneBookObject.prototype.lookUp = function(name) {
  return this.obj[name];
};

makePhoneBookObject.prototype.remove = function(name) {
  delete this.obj[name];
};

const objectToExport = {
  findName,
  makePhoneBookObject
};

module.exports = objectToExport;
