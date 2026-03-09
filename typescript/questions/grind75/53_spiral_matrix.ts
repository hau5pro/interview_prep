// https://leetcode.com/problems/spiral-matrix/
// #matrix

async function g75_53() {
  // script here
  const res = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  const m = matrix.length;
  const n = matrix[0].length;
  const visited: Set<string> = new Set();
  const key = (x: number, y: number): string => `${x},${y}`;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isValid = (x: number, y: number): boolean => {
    return x >= 0 && x < m && y >= 0 && y < n && !visited.has(key(x, y));
  };

  const getNextDirection = (coord: number[]) => {
    const index = directions.indexOf(coord);
    const next = index === directions.length - 1 ? 0 : index + 1;
    return directions[next];
  };

  let x = 0,
    y = 0;
  let direction = directions[0];

  while (visited.size < m * n) {
    result.push(matrix[x][y]);
    visited.add(key(x, y));

    // peek forward
    let nextX = x + direction[0];
    let nextY = y + direction[1];

    if (!isValid(nextX, nextY)) {
      direction = getNextDirection(direction);
    }

    // traverse
    x += direction[0];
    y += direction[1];
  }

  return result;
}

g75_53().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
