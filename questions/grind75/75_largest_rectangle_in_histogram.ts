// https://leetcode.com/problems/largest-rectangle-in-histogram/
// #stack

async function g75_75() {
  // script here
  const res = largestRectangleArea([2, 1, 5, 6, 2, 3]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(N)
// space O(N)

function largestRectangleArea(heights: number[]): number {
  let stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    let h = i === heights.length ? 0 : heights[i];

    while (stack.length !== 0 && h < heights[stack[stack.length -1]]) {
      let height = heights[stack.pop()!];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, width * height);
    }

    stack.push(i);
  }

  return maxArea;
};

g75_75().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
