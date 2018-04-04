/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next;
  while(curr){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

let A = new Node('a');
let B = new Node('b');
let C = new Node('c');

A.next = B;
B.next = C;

console.log(reverseLinkedList(A)); // Should be Node {value: 'c', next: Node { value: 'b', next: Node { value: 'a', next: null } } }

//