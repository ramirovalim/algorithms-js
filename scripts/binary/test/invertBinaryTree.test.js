import { expect } from "chai";
import { invertBinaryTree } from "../invertBinaryTree.js";

describe("invertBinaryTree", () => {
  it("should invert a binary tree", () => {
    const tree = {
      value: 4,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 9,
          left: null,
          right: null,
        },
      },
    };
    const invertedTree = {
      value: 4,
      left: {
        value: 7,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 6,
          left: null,
          right: null,
        },
      },
      right: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    expect(invertBinaryTree(tree)).to.deep.equal(invertedTree);
  });
});
