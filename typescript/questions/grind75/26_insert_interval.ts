// https://leetcode.com/problems/insert-interval/
// #array

async function g75_26() {
  // script here
  const res = insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function insert(intervals: number[][], newInterval: number[]): number[][] {
  // define new array
  const result: number[][] = [];

  // iterate over intervals
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];

    // case: new interval at beginning
    if (newInterval[1] < current[0]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    // case: new interval is larger than current
    else if (newInterval[0] > current[1]) {
      result.push(current);
    }
    // case: new interval overlaps current
    else {
      newInterval = [
        Math.min(current[0], newInterval[0]),
        Math.max(current[1], newInterval[1]),
      ];
    }
  }

  result.push(newInterval);

  return result;
}

g75_26().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
