/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

export const lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root;
  }

  // if (p.val <= root.val && q.val >= root.val) return root;
  // if (p.val >= root.val && q.val <= root.val) return root;

  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};
