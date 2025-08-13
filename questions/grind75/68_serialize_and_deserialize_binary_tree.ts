// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function g75_68() {
  // script here
  // const tree = new TreeNode(
  //   1,
  //   new TreeNode(2),
  //   new TreeNode(3, new TreeNode(4), new TreeNode(5))
  // );
  const tree = new TreeNode(1, new TreeNode(2));
  const res1 = serialize(tree);
  const res2 = deserialize(res1);
  console.log(tree === res2);

  console.log("done");
  process.exit(0);
}

// BFS
// time O(n)
// space O(n)

function serialize(root: TreeNode | null): string {
  if (!root) {
    return "";
  }

  const res = [];

  const q = [];
  q.push(root);

  while (q.length) {
    const node = q.shift();

    if (!node) {
      res.push("#");
    } else {
      res.push(node.val);
      q.push(node.left);
      q.push(node.right);
    }
  }

  return res.join(",");
}

// time O(n)
// space O(n)

function deserialize(data: string): TreeNode | null {
  if (!data) {
    return null;
  }

  const values = data.split(",");
  const root = new TreeNode(Number(values[0]));

  const q = [];
  q.push(root);

  for (let i = 1; i < values.length; i++) {
    const node = q.shift();

    if (values[i] !== "#") {
      node.left = new TreeNode(Number(values[i]));
      q.push(node.left);
    }
    i++;

    if (values[i] !== "#") {
      node.right = new TreeNode(Number(values[i]));
      q.push(node.right);
    }
  }

  return root;
}

g75_68().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
