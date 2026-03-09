// https://leetcode.com/problems/kth-smallest-element-in-a-bst
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function g75_66() {
  // script here
  const tree = new TreeNode(
    3,
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(4)
  );
  const res = kthSmallest(tree, 1);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

// In-order traversal
function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    k--;

    if (k === 0) {
      return current.val;
    }

    current = current.right;
  }

  return Infinity;
}

// brute force ish
// function kthSmallest(root: TreeNode | null, k: number): number {
//   const queue: TreeNode[] = [root];
//   const kthValues: number[] = [];

//   while (queue.length > 0) {
//     const node = queue.shift();

//     kthValues.push(node.val);

//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   kthValues.sort((a, b) => a - b);

//   return kthValues[k - 1];
// }

g75_66().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
