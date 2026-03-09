// https://leetcode.com/problems/merge-intervals/
// #array

async function g75_45() {
  // script here
  const res = merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O((n)log(n))
// space O(n)

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];

  let current: number[];

  const overlaps = (end: number, start: number): boolean => {
    return end >= start;
  };

  for (let i = 0; i < intervals.length; i++) {
    if (!current) {
      current = intervals[i];
    }

    // last element case
    if (i === intervals.length - 1) {
      result.push(current);
      break;
    }

    const next = intervals[i + 1];

    // merge if overlap or push current
    if (overlaps(current[1], next[0])) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = undefined;
    }
  }

  return result;
}

g75_45().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
