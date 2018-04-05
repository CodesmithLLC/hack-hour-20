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
	if([...arguments].length===1){
		return l1;
	}
	let zipped = [];
	while(l1.next !== null || l2.next !== null){
		zipped.push(l1);
		zipped.push(l2);
		l1 = l1.next;
		l2 = l2.next;
	}
	if(l1.next !== null){
		zipped.push(l1.next);
	} else if (l2.next !== null) {
		zipped.push(l2.next);
	}
	for( let i = 0; i< zipped.length-1; i++) {
		zipped[i].next = zipped[i+1];
	}
	return zipped[0];
};

module.exports = {Node: Node, zip: zip};
