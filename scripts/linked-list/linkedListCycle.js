/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = (head) => {
  // if (!head) return false;

  // let slow = head;
  // let fast = head;

  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;

  //   if (slow === fast) {
  //     return true;
  //   }
  // }

  // return false;

  const visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return true;
    }
    visited.add(head);
    head = head.next;
  }
  return false;
};
