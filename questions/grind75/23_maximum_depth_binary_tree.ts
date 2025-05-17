// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function script23() {
  // script here
  const res = maxDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  // traverse tree top down and keep count
  // check left and right
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script23().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
