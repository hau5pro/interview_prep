// https://leetcode.com/problems/binary-tree-level-order-traversal/
// #binary_tree #bfs

import { TreeNode } from "../../data_structures/tree_node";

async function g75_31() {
  // script here
  const tree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  const res = levelOrder(tree);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue = [root];
  let values: number[] = [];
  let i = 0;
  let levelLength = queue.length;

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current) continue;

    values.push(current.val);
    i++;

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);

    if (i === levelLength) {
      res.push(values);
      values = [];
      i = 0;
      levelLength = queue.length;
    }
  }

  return res;
}

g75_31().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
