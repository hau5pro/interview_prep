// https://leetcode.com/problems/invert-binary-tree/
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function g75_06() {
  // script here
  const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  const res = invertTree(tree);
  console.log(res);

  console.log("done");
  process.exit(0);
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

g75_06().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
