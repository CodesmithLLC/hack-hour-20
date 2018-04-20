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
  if (l1) { const newNode = new Node(l1)};
  let currNodeL1 = newNode;
  let currNodeL2; 
  let savedFromL1;
  let savedFromL2;
  while (l1.next) {
    if (!savedFromL1) l1.next = l2.
    if (l2.value) {
      savedFromL1 = l1.next
      let l1.next = l2.next
    }
  };
};

module.exports = {Node: Node, zip: zip};
