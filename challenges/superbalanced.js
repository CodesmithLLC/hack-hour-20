/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced.
 * A non-empty binary tree T is balanced if:
   1) Left subtree of T is balanced
   2) Right subtree of T is balanced
   3) The difference between heights of left subtree and right subtree is not more than 1.
   example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

 /**
  * Another definition:
  * For every node in the binary tree, the difference
  * between heights of left subtree and right subtree is not more than 1.
  */


function BT(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced1(tree) {
  console.log('current tree is ', tree);
  if (tree === null) return true; // Base Case - An empty tree is balanced
  const leftHeight = getHeight1(tree.left);
  const rightHeight = getHeight1(tree.right);
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return (superbalanced1(tree.left) && superbalanced1(tree.right));
}

function getHeight1 (tree) {
  if (tree === null) return 0; // Base Case - An empty tree has a height of 0
  return Math.max(getHeight1(tree.left), getHeight1(tree.right)) + 1; // Take the Max(leftHeight, rightHeight) and **ADD 1** for the root and return
}

const bt = new BT(4);
bt.left = new BT(2); // != bt.left = 2;
bt.right = new BT(5);
console.log(superbalanced1(bt));

// const bt = new BT(200);
// bt.left = new BT(37);
// bt.left.left = new BT(24);
// bt.left.left.left = new BT(7);
// bt.left.left.left.left = new BT(2);
// bt.left.left.right = new BT(32);
// bt.left.right = new BT(42);
// bt.left.right.left = new BT(41);
// bt.left.right.left.left = new BT(40);
// bt.left.right.right = new BT(120);
// bt.right = new BT(202);

// const bt = new BT(200);
// bt.left = new BT(37);
// bt.right = new BT(30);
// bt.right.right = new BT(24);
// bt.right.right.right = new BT(7);
// bt.right.right.right.right = new BT(2);
// bt.right.right.right.right.right = new BT(42);
// bt.right.right.right.right.right.right = new BT(41);
// bt.left.right.left.left = new BT(40);
// bt.left.right.right = new BT(120);
// bt.right = new BT(202);

console.log(superbalanced1(bt));


////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function superbalanced2(tree) {
  if (tree === null) return true;
  if (getHeight2(tree) === -1) return false;
  return superbalanced2(tree.left) && superbalanced2(tree.right);
}

function getHeight2(tree) {
  console.log('inside getHeight2', tree);
  if (tree === null) return 0;
  const leftHeight = getHeight2(tree.left);
  const rightHeight = getHeight2(tree.right);
  const diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1) return -1;
  return Math.max(leftHeight, rightHeight + 1);
}

// console.log(superbalanced2(bt));

/**
 * minimize number of calls to getHeight
 * log (n) instead of n log(n)
 */

// module.exports = { BT, superbalanced1 };
