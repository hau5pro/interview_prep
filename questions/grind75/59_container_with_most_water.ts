// https://leetcode.com/problems/container-with-most-water/
// #array #two_pointer

async function g75_59() {
  // script here
  const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    let minHeight = 0;
    const width = right - left;

    let lv = height[left];
    let rv = height[right];

    // move the pointer with the smaller height inward
    if (lv < rv) {
      minHeight = lv;
      left++;
    } else {
      minHeight = rv;
      right--;
    }

    const localArea = minHeight * width;
    if (localArea > area) {
      area = localArea;
    }
  }

  return area;
}

g75_59().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
