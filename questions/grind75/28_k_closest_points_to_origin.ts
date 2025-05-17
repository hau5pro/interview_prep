// https://leetcode.com/problems/k-closest-points-to-origin/
// #array

async function g75_28() {
  // script here
  const res = kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n log(n))
// space O(1)

function kClosest(points: number[][], k: number): number[][] {
  const getDistance = (point) => {
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
  };

  const result = points
    .sort((a, b) => {
      return getDistance(a) - getDistance(b);
    })
    .slice(0, k);
  return result;
}

g75_28().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
