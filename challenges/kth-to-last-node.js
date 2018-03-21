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
  var current = head, i = 1, foundNode;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }
  current = head;
  while (current) {



  }

}

var list = { data: 1, next: {
                            data: 2, next: {
                                             data: 3, next: {
                                               data: 4, next: null }}}}


console.log(kthToLastNode(3, list))
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
