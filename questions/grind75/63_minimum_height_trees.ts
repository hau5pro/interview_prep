// https://leetcode.com/problems/minimum-height-trees/
// #graph #adjacency_list #bfs

async function g75_63() {
  // script here
  const res = findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

// only 1 or 2 trees can be min height
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (edges.length === 0) return [0];

  const depth: number[] = Array(n).fill(0);
  const adj: number[][] = Array.from({ length: n }, () => []);

  // build adj list and track depths
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
    depth[a]++;
    depth[b]++;
  }

  const queue: number[] = [];
  let front = 0;

  // find leaf nodes
  for (let i = 0; i < depth.length; i++) {
    if (depth[i] === 1) queue.push(i);
  }

  // BFS until only 1 or 2 nodes remain
  while (n > 2) {
    // snapshot queue
    const elementsToPop = queue.length - front;
    n -= elementsToPop;

    for (let i = 0; i < elementsToPop; i++) {
      const node = queue[front++];
      for (const graph of adj[node]) {
        depth[graph]--;

        if (depth[graph] === 1) {
          queue.push(graph);
        }
      }
    }
  }

  return queue.slice(front);
}

g75_63().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
