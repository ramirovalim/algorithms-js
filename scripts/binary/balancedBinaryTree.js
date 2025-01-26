/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

export function isBalanced(root) {
  // we need to check if EVERY node's subtree is balanced (!== -1)
  // and if the max height diff between l and r nodes is 1
  if (root === null) return true;

  return checkHeight(root) !== -1;
}

function checkHeight(root) {
  if (root === null) return 0;

  const left = checkHeight(root.left);
  const right = checkHeight(root.right);

  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}
