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
  if (s2.length !== s1.length) {
    return false;
  }
  var first = s1[0];
  var firstIndex = s2.indexOf(first);
  if (firstIndex === -1) {
    return false;
  }
  var firstHalf = s2.slice(firstIndex, s2.length);
  var secondHalf = s2.slice(0, firstIndex);
  var finalCompare = firstHalf.concat(secondHalf);
  return isSubstring(s1, finalCompare);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
