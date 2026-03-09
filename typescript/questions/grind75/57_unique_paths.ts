// https://leetcode.com/problems/unique-paths/
// #array #combinatorics

async function g75_57() {
  // script here
  const res = uniquePaths(3, 7);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// Combinations NCR
// time O(N)
// space O(1)
function uniquePaths(m: number, n: number): number {
  let N = m + n - 2;
  let R = Math.min(n - 1, m - 1);
  let res = 1;
  for (let i = 0; i < R; i++) {
    res = res * (N - i);
    res = res / (i + 1);
  }

  return res;
}

g75_57().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
