import { expect } from "chai";
import { isBalanced } from "../balancedBinaryTree.js";

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

describe("Is balanced binary tree", () => {
  it("should return true if BT is balanced", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(isBalanced(root)).to.deep.equal(true);
  });

  it("should return false if BT is imbalanced", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.right = new TreeNode(4);

    expect(isBalanced(root)).to.deep.equal(false);
  });

  it("should return true if BT is empty", () => {
    const root = new TreeNode(null);

    expect(isBalanced(root)).to.deep.equal(true);
  });
});
