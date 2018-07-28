/* You have two numbers represented by linked lists. Each node contains a
 * single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the
 * list. Write a function that adds the two numbers and returns the sum as a
 * linked list with the same structure.
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
  let curr1 = l1;
  let curr2 = l2;
  let carry = 0;
  while (curr1 && curr2) {
    if (carry === 1) {
      curr1.value++;
      carry = 0;
    }
    curr1.value = curr1.value + curr2.value;
    if (curr1.value > 9) {
      if (curr1.next === null) {
        curr1.next = new Node(1);
      }
      carry = 1;
      curr1.value = curr1.value % 10;

    }
    curr1 = curr1.next;
    console.log(curr1);
    curr2 = curr2.next;
  }
  return l1;
}

const myNode = new Node(2);
myNode.next = new Node(4);
myNode.next.next = new Node(3);

const myNode2 = new Node(5);
myNode2.next = new Node(6);
myNode2.next.next = new Node(4);

console.log(JSON.stringify(addLinkedList(myNode, myNode2)));

module.exports = { Node, addLinkedList };
