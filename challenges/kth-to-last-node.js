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
  // let str = String(JSON.stringify(arguments[1]));
  // let listLength = str.match(/{/gi).length;
  // if (k > 0 && k <= listLength) {
  //   for (let i = 0 ; i <= listLength-k-1; i++) {
  //     head = head.next;
  //   } 
  //   return head.value; 
  // }
  // return undefined;

  ///////////////////
  let listLength = 1;
  let currNode = head;
  while (currNode.next) {
    listLength++;
    currNode = currNode.next;
  }
  if (k > 0 && k <= listLength) {
    for (let i = 0; i < listLength - k; i++) {
      head = head.next;
    }
    return head.value
  }
  return undefined;
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// console.log(kthToLastNode(0, a))
// console.log(kthToLastNode(1, a));
// console.log(kthToLastNode(2, a));
// console.log(kthToLastNode(3, a));
// console.log(kthToLastNode(4, a));
// console.log(kthToLastNode(5, a));
// console.log(kthToLastNode(6, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
