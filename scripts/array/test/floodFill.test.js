import { expect } from "chai";
import { floodFill } from "../floodFill.js";

describe("floodFill", () => {
  it("should return the correct output for the given input", () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const sr = 1;
    const sc = 1;
    const newColor = 2;
    const expectedOutput = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    expect(floodFill(image, sr, sc, newColor)).to.deep.equal(expectedOutput);
  });
  it("should return the correct output for the given input", () => {
    const image = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    const sr = 0;
    const sc = 0;
    const newColor = 0;
    const expectedOutput = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(floodFill(image, sr, sc, newColor)).to.deep.equal(expectedOutput);
  });
});
