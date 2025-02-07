// https://leetcode.com/problems/merge-two-sorted-lists/
// #linked_list

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

async function script3() {
  // script here

  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  const res = mergeTwoLists(list1, list2);
  console.log(res);

  console.log("done");
  process.exit(0);
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode(0);
  let op = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      op.next = list1;
      list1 = list1.next;
    } else {
      op.next = list2;
      list2 = list2.next;
    }

    op = op.next;
  }

  // append remaining list to end.
  op.next = list1 || list2;

  return head.next;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script3().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
