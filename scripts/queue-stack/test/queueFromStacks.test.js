import { expect } from "chai";
import { MyQueue } from "../queueFromStacks.js";

describe("MyQueue", () => {
  it("should perform queue operations correctly", () => {
    const queue = new MyQueue();

    // Test empty queue
    expect(queue.empty()).to.be.true;

    // Test push operation
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.empty()).to.be.false;

    // Test peek operation
    expect(queue.peek()).to.equal(1);

    // Test pop operation
    expect(queue.pop()).to.equal(1);
    expect(queue.peek()).to.equal(2);
    expect(queue.pop()).to.equal(2);
    expect(queue.peek()).to.equal(3);
    expect(queue.pop()).to.equal(3);

    // Test empty queue after pops
    expect(queue.empty()).to.be.true;
  });

  it("should handle interleaved operations correctly", () => {
    const queue = new MyQueue();

    queue.push(1);
    expect(queue.peek()).to.equal(1);
    queue.push(2);
    expect(queue.pop()).to.equal(1);
    expect(queue.peek()).to.equal(2);
    queue.push(3);
    expect(queue.pop()).to.equal(2);
    expect(queue.peek()).to.equal(3);
    expect(queue.pop()).to.equal(3);
    expect(queue.empty()).to.be.true;
  });
});
