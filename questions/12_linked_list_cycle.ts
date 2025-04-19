// https://leetcode.com/problems/linked-list-cycle/
// #linked_list

import { ListNode } from "../data_structures/list_node";

async function script12() {
  // script here
  const d = new ListNode(-4);
  const c = new ListNode(0, d);
  const b = new ListNode(2, c);
  const a = new ListNode(3, b);
  d.next = b;

  const res = hasCycle(a);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function hasCycle(head: ListNode | null): boolean {
  // floyd's cycle finding algo (2 pointer, fast and slow)

  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script12().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
