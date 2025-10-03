// https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// #dp

async function g75_73() {
  // script here
  const res = jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n log (n))
// space O(n)

function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  // combine and sort arrays
  const jobs = startTime
    .map((start, i) => [start, endTime[i], profit[i]])
    .sort((a, b) => (a[1] - b[1]));

  // initialize dp array
  const dp: [number, number][] = [[0, 0]]; // [endtime, profit]

  const binarySearch = (jobs: [number, number][], start: number): number => {
    let low = 0;
    let high = jobs.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (jobs[mid][0] <= start) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return high;
  }

  for (const [start, end, prof] of jobs) {
    const i = binarySearch(dp, start);
    const maxProfit = dp[i][1] + prof;

    if (maxProfit > dp[dp.length - 1][1]) {
      dp.push([end, maxProfit]);
    }
  }

  return dp[dp.length - 1][1];
}

g75_73().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
