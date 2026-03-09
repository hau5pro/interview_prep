// https://leetcode.com/problems/trapping-rain-water/
// #two_pointer

async function g75_69() {
  // script here
  const res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function trap(height: number[]): number {
  let result = 0;

  if (height.length === 0) return result;

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  // outward in
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
    }
  }

  return result;
}

g75_69().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
