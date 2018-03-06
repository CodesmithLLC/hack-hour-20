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
  let holder = {};
  let newNod = 0;
  let curr = head;
  newNod ++ 

while(curr.next !== null){ //check if node is defined/has any values
  holder = curr;
  newNod++;
  curr = curr.next; //point curr node to the next one 
  //console.log(curr);
}

newNod = newNod - k;
curr = head;
for(var i = 0; i < newNod; i++){
  holder = curr;
  curr = curr.next;
  //console.log("work", curr.next)
}
return curr.value;
}


console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
