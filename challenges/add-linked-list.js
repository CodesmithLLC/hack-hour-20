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

  let carryOver = 0;
  let newList;
  if((l1.value + l2.value) >= 10) {
    newList = new Node((l1.value + l2.value) % 10);
    carryOver = 1;
  } else {
    newList = new Node(l1.value + l2.value);
  }
  let head = newList;
  while(l1.next != null && l2.next != null){
    l1 = l1.next;
    l2 = l2.next;
    if((l1.value + l2.value + carryOver) >= 10) {
      newList.next = new Node((l1.value + l2.value + carryOver) % 10);
      carryOver = 1;
    } else {
      newList.next = new Node(l1.value + l2.value + carryOver);
      carryOver = 0;
    }
    newList = newList.next;
  }
  if(carryOver > 0){
    newList.next = new Node(1);
  }
return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

let A = new Node(8);
let B = new Node(1);
let C = new Node(3);
let D = new Node(8);
A.next = B;
C.next = D;

console.log(addLinkedList(A,C)) 