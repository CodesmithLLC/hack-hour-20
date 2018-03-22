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
  const l1 = new Node();
  const l2 = new Node();

  if(l1.next === null) {
    l1.next = l2;
  }
  if(l2.val === null) {
    l2.val = l1.val;
  }
};

console.log(l1);

module.exports = {Node: Node, zip: zip};
