import { expect } from "chai";
import { lowestCommonAncestor } from "../lowComAncBSTree.js";

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

describe("lowestCommonAncestor", () => {
  it("should return LCA of BST", () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(2);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    const p = root.left; // Node with value 2
    const q = root.right; // Node with value 8
    expect(lowestCommonAncestor(root, p, q)).to.deep.equal(root);
  });

  it("should return LCA of BST", () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(2);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    const p = root.left; // Node with value 2
    const q = root.left.right; // Node with value 4
    expect(lowestCommonAncestor(root, p, q)).to.deep.equal(p);
  });

  it("should return LCA of BST", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);

    const p = root;
    const q = root.left;
    expect(lowestCommonAncestor(root, p, q)).to.deep.equal(root);
  });
});
