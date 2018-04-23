/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	const combined = [];
	let temp1 = l1;
	const arr1 = [];
	let temp2 = l2;
	const arr2 = [];
	while(temp1 !== null || temp2 !== null) {
		if(temp1 !== null) {
			arr1.push(temp1.value);
			temp1 = temp1.next;
		}
		if(temp2 !== null) {
			arr2.push(temp2.value);
			temp2 = temp2.next;
		}
	}
	let carryover = 0;
	for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
		if(arr1[i] !== undefined && arr2[i] !== undefined) {
			let sum = arr1[i]+arr2[i];
			combined.push(sum%10+carryover);
			carryover = 0;
			if(sum >= 10) {
				carryover ++;
			} 
		} else if (arr2[i] === undefined) {
			arr1[i] += carryover;
			combined.push(arr1[i]);
		} else {
			arr2[i] += carryover;
			combined.push(arr2[i]);
		}
	}
	let head = {};
	let temp;
	for (let i = 0 ; i < combined.length-1; i++ ) {
		if(i === 0) {
			head = new Node(combined[i]);
			head.next = new Node(combined[i+1]);
			temp = head;
		}
		temp.next = new Node(combined[i+1]);
		temp = temp.next;
	}
	return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
