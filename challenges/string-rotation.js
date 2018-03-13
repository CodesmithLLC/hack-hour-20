/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
<<<<<<< HEAD
  let arr1 = s1.split("")
  let arr2 = s2.split("")
  
  while(arr2[0] !== arr1[0]){
    arr2.push(arr2.shift())
  }
  arr1 = arr1.join("")
  arr2 = arr2.join("")
  return arr1 === arr2;
=======

>>>>>>> 3e28fefa6b1e821fc5aeb9d5f057a6548c5dc1db
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
