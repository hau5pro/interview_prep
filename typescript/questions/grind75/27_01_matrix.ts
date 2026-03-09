// https://leetcode.com/problems/01-matrix/
// #matrix #bfs

async function g75_27() {
  // script here
  const res = updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(m x n)
// space O(m x n)

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  // check 0 distance cells
  const queue: [number, number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  const isValidCell = (x: number, y: number): boolean => {
    return x >= 0 && x < m && y >= 0 && y < n;
  };

  const directions: [number, number][] = [
    [1, 0], // right
    [0, 1], // top
    [-1, 0], // left
    [0, -1], // bottom
  ];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [moveX, moveY] of directions) {
      const nextX = x + moveX;
      const nextY = y + moveY;

      if (isValidCell(nextX, nextY) && mat[nextX][nextY] > mat[x][y] + 1) {
        mat[nextX][nextY] = mat[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  return mat;
}

function neighboringValue(value?: number) {
  return !!value && value === 0;
}

g75_27().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
