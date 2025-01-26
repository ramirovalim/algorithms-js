function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node2 = new ListNode(5);
let node1 = new ListNode(10, node2);

console.log("node1: ", node1);
console.log("node2: ", node2);

console.log("node1 value: ", node1.val);
console.log("node1->next value: ", node1.next.val);
console.log("node1->next next: ", node1.next.next);

node2.next = node1;
console.log("AFTER");
console.log("------------------");

console.log("node1: ", node1);
console.log("node2: ", node2);

console.log("node1 value: ", node1.val);
console.log("node1->next value: ", node1.next.val);
console.log("node1->next next: ", node1.next.next);
