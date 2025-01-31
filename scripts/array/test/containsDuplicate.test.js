import { expect } from "chai";
import { containsDuplicate } from "../containsDuplicate.js";

describe.only("contains duplicate", () => {
  it("should return true if contains duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).to.be.true;
  });
  it("should return false if all values are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).to.be.false;
  });
  it("should return true if contains duplicate", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).to.be.true;
  });
});
