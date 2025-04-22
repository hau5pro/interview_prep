// https://leetcode.com/problems/climbing-stairs/
// #dp

async function script16() {
  // script here
  const res = climbStairs(5);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function climbStairs(n: number): number {
  // edge case
  if (n <= 1) return 1;

  // bottom up dp, fibonacci
  let a = 1;
  let b = 1;
  let combinations = 0;

  for (let i = n - 1; i > 0; i--) {
    combinations = a + b;
    a = b;
    b = combinations;
  }

  return combinations;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script16().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
