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
  if (!l1) return l2;
  if (!l2) return l1;
  let result = l1;
  let alt = l2;
  let hold;
  while (result) {
    hold = result.next;
    result.next = alt;
    alt = hold;
    result = result.next;
  }
  return l1;
};
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(JSON.stringify(zip(node1, nodeA)));



module.exports = {Node: Node, zip: zip};
