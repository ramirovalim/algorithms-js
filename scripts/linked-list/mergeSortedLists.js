/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const mergeTwoListsIterative = function (list1, list2) {
  const dummy = new ListNode(0);
  let aux = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      aux.next = list1;
      aux = list1;
      list1 = list1.next;
    } else {
      aux.next = list2;
      aux = list2;
      list2 = list2.next;
    }
  }

  // one of the lists reached the end
  if (!list1) aux.next = list2;
  if (!list2) aux.next = list1;
  return dummy.next;
};

export const mergeTwoListsRecursively = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoListsRecursively(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoListsRecursively(list2.next, list1);
  return list2;
};
