/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let newLink = new Node(l1.value);
  let currLeft = l1;
  let currRight = l2;
  let isRight = true;
  while(currLeft.next != null && currRight.next != null) {
    let nnode;
    if (isRight) {
      nnode = new Node(currRight.value);
      currRight = currRight.next;
     } else {
      nnode = new Node(currLeft.value);
      currLeft = currLeft.next;
     }
      
    newLink.next = nnode;
    newLink = nnode;
    
  }
};

module.exports = {Node: Node, zip: zip};
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');
const j = new Node('J');
f.next = g;
g.next = h;
h.next = i;
i.next = j;

console.log(zip(a, f));