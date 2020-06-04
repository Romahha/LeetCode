// Invert Binary Tree

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
*/

// Runtime: 72 ms
// Memory Usage: 33.9 MB
var invertTree = function(root) {
      if (root === null) return root;
      let right = invertTree(root.right);
      let left = invertTree(root.left);

      root.right = left;
      root.left = right;

      return root;
};
