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
  let curNode1 = l1;
  let curNode2 = l2;
  let output;
  let carry = 0;
  while (curNode1 || curNode2) {
    let value1 = 0;
    let value2 = 0;
    if (curNode1) {
      value1 = curNode1.value;
    }
    if (curNode2) {
      value2 = curNode2.value;
    }
    if (curNode1 === l1 && curNode1 || curNode2 === l2 && curNode2) {
      let add = value1 + value2;
      if (add >= 10) {
        carry = 1;
      }
      let newVal = add % 10;
      output = new Node(newVal);
      curNodeOut = output;
      if (curNode1) {
        curNode1 = curNode1.next;
      }
      if (curNode2) {
        curNode2 = curNode2.next;
      }
      
    } else {
      let add = value1 + value2;
      let newVal = add % 10;
      curNodeOut.next = new Node(newVal + carry);
      if (add >= 10) {
        carry = 1;
      }
      curNodeOut = curNodeOut.next;
      if (curNode1) {
        curNode1 = curNode1.next;
      }
      if (curNode2) {
        curNode2 = curNode2.next;
      }
    }
  }
  if (carry === 1) {
    curNodeOut.next = new Node(1);
  }
  return output;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
