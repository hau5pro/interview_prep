// https://leetcode.com/problems/balanced-binary-tree/description/
// #binary_tree #dfs

import { TreeNode } from "./data_structures/tree_node";

async function script11() {
  // script here
  const res = isBalanced(
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

// time: O(n)

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root) !== -1;
}

function dfs(root: TreeNode | null): number {
  if (root === null) return 0;

  const leftHeight = dfs(root.left);
  if (leftHeight === -1) return -1;

  const rightHeight = dfs(root.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script11().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
