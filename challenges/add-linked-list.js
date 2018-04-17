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
  let firstHead = l1;
  let secondHead = l2;

  while(firstHead && secondHead) {
    firstHead.value = firstHead.value + secondHead.value;
    if(firstHead.value > 9) {
      firstHead.value -= 10;
      firstHead.next.value += 1;
    }
    firstHead = firstHead.next
    secondHead = secondHead.next
  }
  return l1;
}

let list1 = new Node(2)
list1.next = new Node(1)
list1.next.next = new Node(5)

let list2 = new Node(5)
list2.next = new Node(9)
list2.next.next = new Node(2)

console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
