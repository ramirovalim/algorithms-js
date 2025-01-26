import { expect } from "chai";
import { solution } from "../firstBadVersion.js";

describe("First Bad Version", () => {
  it("should return the first bad version when it is the first version", () => {
    const isBadVersion = (version) => version >= 1;
    const findFirstBadVersion = solution(isBadVersion);
    expect(findFirstBadVersion(5)).to.equal(1);
  });

  it("should return the first bad version when it is in the middle", () => {
    const isBadVersion = (version) => version >= 3;
    const findFirstBadVersion = solution(isBadVersion);
    expect(findFirstBadVersion(5)).to.equal(3);
  });

  it("should return the first bad version when it is the last version", () => {
    const isBadVersion = (version) => version >= 5;
    const findFirstBadVersion = solution(isBadVersion);
    expect(findFirstBadVersion(5)).to.equal(5);
  });

  it("should return -1 when there are no bad versions", () => {
    const isBadVersion = (version) => false;
    const findFirstBadVersion = solution(isBadVersion);
    expect(findFirstBadVersion(5)).to.equal(-1);
  });
});
