// https://leetcode.com/problems/middle-of-the-linked-list/
// #linked_list

import { ListNode } from "../data_structures/list_node";

async function script22() {
  // script here
  const res = middleNode(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function middleNode(head: ListNode | null): ListNode | null {
  // two pointers
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// time O(n)
// space O(n)

// function middleNode(head: ListNode | null): ListNode | null {
//   // keep in space?
//   const array: ListNode[] = [];
//   let curr = head;

//   while (curr !== null) {
//     array.push(curr);
//     curr = curr.next;
//   }

//   const middle =
//     array.length % 2 === 0
//       ? Math.round(array.length / 2) + 1
//       : Math.round(array.length / 2);

//   return array[middle - 1];
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script22().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
