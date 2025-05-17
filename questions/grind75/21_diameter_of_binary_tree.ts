// https://leetcode.com/problems/diameter-of-binary-tree/
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function script21() {
  // script here
  // const res = diameterOfBinaryTree(
  //   new TreeNode(
  //     1,
  //     new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  //     new TreeNode(3)
  //   )
  // );
  const res = diameterOfBinaryTree(new TreeNode(1, new TreeNode(2)));
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

let max = 0;

function diameterOfBinaryTree(root: TreeNode | null): number {
  getDepth(root);
  return max;
}

function getDepth(node: TreeNode | null) {
  if (!node?.left && !node?.right) return 0;

  const leftDepth = node.left ? 1 + getDepth(node.left) : 0;
  const rightDepth = node.right ? 1 + getDepth(node.right) : 0;

  max = Math.max(max, leftDepth + rightDepth);

  return Math.max(leftDepth, rightDepth);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script21().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
