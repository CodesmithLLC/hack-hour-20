/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value, next) {
    this.value = value;
    this.next = next || null;
}

function reverseLinkedList (head) {
  // edge case: if list has zero, or only one node, then return the current head
  if (head.next === null) return head;
  let curr = head;
  let prev = null;
  while (curr) {
    var save = curr.next;
    curr.next = prev;
    prev = curr;
    curr = save;
  }
  return prev;
}

function reverseList (head) {
  if (cur === null) return;
}

let node = new Node(1, new Node(2, new Node(3)));
// node(2, new Node(2))
console.log(reverseLinkedList(node))


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
