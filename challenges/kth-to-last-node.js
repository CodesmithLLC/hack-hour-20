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

function Node(value) {
  this.value = value;
  this.next = null;
}

function kthToLastNode(k, head) {
  let it = head;
  let kBack = it;
  let kBackPrev = it;
  let i;
  let nodesSeen = 0;
  for (i = 1; i < k, it !== null; i++) {
    nodesSeen++;
    if (i === k) {
      if (kBackPrev !== kBack) kBackPrev = kBack;
      kBack = it;
      i = 0;
    }
    it = it.next;
  }
  if (i === k) {
    it = kBack;
  } else {
    it = kBackPrev;
    for (let j = 1; j < i; j++) {
      nodesSeen++;
      it = it.next;
    }
  }
  if (k > nodesSeen) return null;
  return it.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
