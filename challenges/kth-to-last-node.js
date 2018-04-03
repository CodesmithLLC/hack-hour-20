/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 */
 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let count = 0;
  let copy = head;
  while(copy !== null){
    copy = copy.next;
    count++;
  }
  for(let i = 0 ; i < count-k;i++){
    head = head.next;
  }
  return k>count ? undefined: head.value ;
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
 console.log(kthToLastNode(6, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
