// https://leetcode.com/problems/merge-k-sorted-lists/
// #linked_list

import { ListNode } from "../../data_structures/list_node";

async function g75_74() {
  // script here
  const n1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const n2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const n3 = new ListNode(2, new ListNode(6));
  const nodes = [
   n1, n2, n3
  ];
  const res = mergeKLists(nodes);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(N log(N))
// space O(N)

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let nodesArray: Array<ListNode> = []

    lists.forEach((node) => {
        while (node) {
            nodesArray.push(node);
            node = node.next;
        }
    });

    nodesArray.sort((node1, node2) => node1.val - node2.val);

    let resultNode = nodesArray[0] ?? null;

    nodesArray.forEach((node, index, arr) => {
        node.next = arr[index + 1] ?? null;
    });
    
    return resultNode;
};

g75_74().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
