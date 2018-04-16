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

let phillip = new BinaryTree(10);
phillip.left= new BinaryTree(3);
phillip.right= new BinaryTree(12);

console.log(phillip);
function validBST(tree) {

    // if tree.left.val is < tree.val and not null
    // &&
    // tree.right.val is > tree.val and not null
        //validBST(tree.left)
        //validBST(tree.right)
    //else return false

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
