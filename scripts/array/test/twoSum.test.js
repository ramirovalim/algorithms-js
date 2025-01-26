import { expect } from "chai";
import {
  twoSumBruteForce,
  twoSumSortAndPointers,
  twoSumTwoPassHashTable,
  twoSumOnePassHashTable,
} from "../twoSum.js";

describe("twoSum", () => {
  it("twoSumBruteForce", () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumBruteForce([3, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSumBruteForce([3, 3], 6)).to.deep.equal([0, 1]);
  });
  it("twoSumSortAndPointers", () => {
    expect(twoSumSortAndPointers([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumSortAndPointers([3, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSumSortAndPointers([3, 3], 6)).to.deep.equal([0, 1]);
  });
  it("twoSumTwoPassHashTable", () => {
    expect(twoSumTwoPassHashTable([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumTwoPassHashTable([3, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSumTwoPassHashTable([3, 3], 6)).to.deep.equal([0, 1]);
  });
  it("twoSumOnePassHashTable", () => {
    expect(twoSumOnePassHashTable([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumOnePassHashTable([3, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSumOnePassHashTable([3, 3], 6)).to.deep.equal([0, 1]);
  });
});
