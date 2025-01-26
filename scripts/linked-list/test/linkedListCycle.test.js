import { expect } from "chai";
import { hasCycle } from "../linkedListCycle.js";

function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

describe("Linked list has cycle", () => {
  it("should return true for a cycle in the list [3,2,0,-4] with cycle at position 1", () => {
    const node4 = new ListNode(-4);
    const node3 = new ListNode(0, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(3, node2);
    node4.next = node2; // create cycle

    expect(hasCycle(node1)).to.be.true;
  });

  it("should return true for a cycle in the list [1,2] with cycle at position 0", () => {
    const node2 = new ListNode(2);
    const node1 = new ListNode(1, node2);
    node2.next = node1; // create cycle

    expect(hasCycle(node1)).to.be.true;
  });

  it("should return false for a list [1] with no cycle", () => {
    const node1 = new ListNode(1);

    expect(hasCycle(node1)).to.be.false;
  });

  it("should return false for an empty list", () => {
    expect(hasCycle(null)).to.be.false;
  });

  it("should return true for a cycle in the list [1,2,3,4,5] with cycle at position 2", () => {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    node5.next = node3; // create cycle

    expect(hasCycle(node1)).to.be.true;
  });

  it("should return false for a list [1,2,3,4,5] with no cycle", () => {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    expect(hasCycle(node1)).to.be.false;
  });
});
