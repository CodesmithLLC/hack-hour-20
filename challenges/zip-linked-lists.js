// /* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
//  * the first node of the first argument, if it exists.
//  * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
//  *
//  * BONUS: Do this in place
//  */

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function zip(l1, l2) {
//   let curr = l1;
//   while ( curr !== null) {
//     curr = curr.next;
//   }
//   curr.next = new Node(3);
//   // if (!l1) return l2;
//   // if (!l2) return l1;
//   // let result = l1;
//   // let alt = l2;
//   // let hold;
//   // while (result) {
//   //   hold = result.next;
//   //   result.next = alt;
//   //   alt = hold;
//   //   result = result.next;
//   // }
//   // return l1;
// };

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// node1.next = node2;
// node2.next = node3;

// let nodeA = new Node('A');
// let nodeB = new Node('B');
// let nodeC = new Node('C');
// nodeA.next = nodeB;
// nodeB.next = nodeC;

// console.log(zip(node1, nodeA));



// module.exports = {Node: Node, zip: zip};


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
  let l1Node = l1.next;
  let l2Node = l2.next;
  let curr1 = l1;
  let curr2 = l2;
  while(l1Node !== null || l2Node !== null){
    curr1.next = curr2
    curr1.next.next= l1Node;
    l1Node = l1Node.next;
    curr1 = curr1.next.next;
    curr2 = l2Node;
    l2Node = l2Node.next;
  }
 if(l1Node === null){
   curr1.next = l2Node;
 }else{
   curr1.next = l1Node;
 }
 return l1;   
  }
let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(6);
l1.next.next.next = new Node(8);
l1.next.next.next.next = new Node(10);


let l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(5);
l2.next.next.next = new Node(7);
l2.next.next.next.next = new Node(9);

console.log(JSON.stringify(zip(l2, l1)));


module.exports = {Node: Node, zip: zip};