import { ListNode } from "../data_structures/list_node";

async function script18() {
  // script here
  const res = reverseList(
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

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script18().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
