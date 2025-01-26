import { expect } from "chai";
import { binarySearch } from "../binarySearch.js";

describe("binarySearch", () => {
  it("should return the index of the target value", () => {
    const arr = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const result = binarySearch(arr, target);
    expect(result).to.equal(4);
  });
  it("should return -1 if the target value is not found", () => {
    const arr = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const result = binarySearch(arr, target);
    expect(result).to.equal(-1);
  });
  it("should return the index of the target value in an array with even length", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const target = 4;
    const result = binarySearch(arr, target);
    expect(result).to.equal(3);
  });
});
