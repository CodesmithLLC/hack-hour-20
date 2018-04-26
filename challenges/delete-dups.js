/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
	this.value = val;
	this.next = null;
}

function deleteDups(head) {
	const num = [head.value];
	let temp = head;
	while(temp.next !== null) {
		if(num.indexOf(temp.next.value) >= 0) {
			if(temp.next.next === null) {
				temp.next = null;
				break;
			}
			else {
				temp.next = temp.next.next;
				num.push(temp.next.value);
			}
		} else {
			num.push(temp.next.value);
		}
		temp = temp.next;
	}
	return head;
}


module.exports = deleteDups;
