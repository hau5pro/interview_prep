// https://leetcode.com/problems/clone-graph/
// #graph #dfs

import { _Node } from "../../data_structures/node";

async function g75_32() {
  // script here
  const n1 = new _Node(1);
  const n2 = new _Node(2);
  const n3 = new _Node(3);
  const n4 = new _Node(4);
  n1.neighbors = [n2, n4];
  n2.neighbors = [n1, n3];
  n3.neighbors = [n2, n4];
  n4.neighbors = [n1, n3];

  const res = cloneGraph(n1);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function cloneGraph(node: _Node | null): _Node | null {
  const visited: Map<_Node, _Node> = new Map();

  const cloneNode = (n: _Node) => {
    if (n === null) return null;

    let clone: _Node;

    if (visited.has(n)) {
      return visited.get(n);
    }

    clone = new _Node(n.val);
    visited.set(n, clone);

    const neighbors = [];
    for (const neighbor of n.neighbors) {
      neighbors.push(cloneNode(neighbor));
    }

    clone.neighbors = neighbors;

    return clone;
  };

  const root = cloneNode(node);

  return root;
}

g75_32().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
