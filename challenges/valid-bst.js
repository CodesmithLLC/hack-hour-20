/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  var current = this.value;
      //return false if left greater than current
  if(this.left.value > this.value) return false
      //if left less than current move down tree to left
  if(this.left.value < this.value) {
      this.current = this.left
    }
      //if left and right are null then all lefts must be less than currents checked against, so go back to up
  if((this.left.value === null)
      //need to recurse


  if(this.right.value < this.value) return false
      //if left less than current move down tree to left
  if(this.right.value > this.value) {
      this.current = this.right
    }
  if


    return false
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
