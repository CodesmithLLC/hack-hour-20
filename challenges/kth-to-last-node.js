/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let currentNode = head;
  while ( currentNode.next !== null ) {
    let savedCurrentNode = currentNode;
    currentNode = currentNode.next;
    currentNode.back = savedCurrentNode;
  }
  let tail = currentNode;
  for (let i = 0; i <k-1 ; i++) {
    tail = tail.back;
  }
  let NthNodeFromTail = tail;
  console.log('this is our Tail', NthNodeFromTail);
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
