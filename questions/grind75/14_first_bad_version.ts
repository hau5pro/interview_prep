// https://leetcode.com/problems/first-bad-version/
// #binary_search

async function g75_14() {
  // script here
  const res = solution(5);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(log(n))
// space O(1)

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let low = 1;
    let high = n;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const isBad = isBadVersion(mid);

      if (isBad) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };
};

g75_14().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
