/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  if !(l1.value && l2.value) return 'invalid inputs'
  let currl1 = l1.value;
  let currl2 = l2.value;
  let node = new Node(currl1+currl2)
  while (l1.next && l2.next) {
    currl1 = l1.value;
    curr
  }
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
