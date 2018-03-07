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
  let tempArr = [];
  if (head === null) {
    return undefined;
  } else  {
    let curr = head;
    while (curr.next) {
      curr = curr.next;
      tempArr.push(curr.value); 
      
    }
   return tempArr[tempArr.length-k];
  }
}

  //I need to work on this more in my lunch hour or tonight!I got a late start on it (my fault - I spaced out 
//on the fact that it wasn't going to be posted but we had to go and get it.)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
