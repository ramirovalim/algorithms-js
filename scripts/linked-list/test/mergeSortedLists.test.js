import { expect } from "chai";
import {
  mergeTwoListsIterative,
  mergeTwoListsRecursively,
} from "../mergeSortedLists.js";

// const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
// const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
// const mergedList = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
//     },
//   },
// };

describe("mergeTwoListsIterative", () => {
  it("should merge two sorted linked lists", () => {
    expect(
      mergeTwoListsIterative(
        { val: 1, next: { val: 2, next: { val: 4, next: null } } },
        { val: 1, next: { val: 3, next: { val: 4, next: null } } }
      )
    ).to.deep.equal({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
        },
      },
    });
  });
  it("should handle empty lists", () => {
    expect(mergeTwoListsIterative(null, null)).to.equal(null);
  });
  it("should handle lists with different lengths", () => {
    const l1 = null;
    const l2 = { val: 0, next: null };
    expect(mergeTwoListsIterative(l1, l2)).to.deep.equal(l2);
  });
});

describe("mergeTwoListsRecursively", () => {
  it("should merge two sorted linked lists", () => {
    expect(
      mergeTwoListsRecursively(
        { val: 1, next: { val: 2, next: { val: 4, next: null } } },
        { val: 1, next: { val: 3, next: { val: 4, next: null } } }
      )
    ).to.deep.equal({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
        },
      },
    });
  });
  it("should handle empty lists", () => {
    expect(mergeTwoListsRecursively(null, null)).to.equal(null);
  });
  it("should handle lists with different lengths", () => {
    const l1 = null;
    const l2 = { val: 0, next: null };
    expect(mergeTwoListsRecursively(l1, l2)).to.deep.equal(l2);
  });
});
