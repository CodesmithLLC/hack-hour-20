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
  if (!parentNode.left && !parentNode.right) return true;
//   let parentNode = tree
//   let currNodeLeft = tree.left;
//   let currNodeRight = tree.right;

//   while (currNodeLeft) {
//     if (tree.left.value && tree.left.value > tree.value) return false;
    

//   };

//   while (currNodeRight) {
//     if (tree.right.value && tree.right.value > tree.value) return false;
//   };

//   return true;
// //   return validBST(tree.left) && validBST(tree.right);
}

var BST1 = new BinaryTree(10);
// var BST2 = new BinaryTree(15);
// var BST3 = new BinaryTree(5);
// var BST5 = new BinaryTree(13);
// var BST4 = new BinaryTree(20);

// BST1.right = BST2
// BST1.left = BST3;
// BST3.left = BST5;
// BST2.right = BST4;
console.log(validBST(BST1));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
