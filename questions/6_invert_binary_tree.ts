// https://leetcode.com/problems/invert-binary-tree/
// #binary_tree

async function script6() {
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

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script6().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
