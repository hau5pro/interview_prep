// https://leetcode.com/problems/binary-tree-right-side-view/
// #binary_tree #bfs

import { TreeNode } from "../../data_structures/tree_node";

async function g75_55() {
  // script here
  const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(4))
  );
  const res = rightSideView(root);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root === null) return result;

  let queue = [root];

  while (queue.length > 0) {
    const count = queue.length;

    // take last (right most node value on this level)
    const last = queue[queue.length - 1];
    result.push(last.val);

    // push all children of nodes on this level
    for (let i = 0; i < count; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

g75_55().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
