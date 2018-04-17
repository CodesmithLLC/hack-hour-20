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
  let currOne = l1.this.head
  let currTwo = l2.this.head
  let resList = new Node(currOne + currTwo)
  while(l1.this.next != null) {
    resList.next = (l1.this.next + l2.this.next)
    currOne = l1.this.next
    currTwo = l2.this.next
  }
  return resList
}

module.exports = {Node: Node, addLinkedList: addLinkedList};