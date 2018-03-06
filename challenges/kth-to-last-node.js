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
  if (k === 0) {
    return;
  }
  let curNode = head;
  let totalLength = 0;
  while (curNode.next !== null) {
    curNode = curNode.next;
    totalLength++;
  }
  totalLength++;
  if (k > totalLength) {
    return;
  }
    curNode = head;
    let count = 0;
    while (totalLength - count > k) {
      curNode = curNode.next;
      count++;
    }
    return curNode.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
