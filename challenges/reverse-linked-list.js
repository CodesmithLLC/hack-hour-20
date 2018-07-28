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
  let newHead = head;
  while (newHead) {
    newHead = newHead.next;
  }
  let curr = head;
  let currHead = newHead;
  console.log(currHead);
  while (curr) {
    currHead.next = curr;
    curr = curr.next;
    currHead = currHead.next;
  }
  console.log('final curr', newHead);
  return newHead;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log('before', node1);
console.log(reverseLinkedList(node1));

// module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
