// https://leetcode.com/problems/rotting-oranges/
// #matrix #bfs

async function g75_41() {
  // script here
  // const grid = [
  //   [2, 1, 1],
  //   [1, 1, 0],
  //   [0, 1, 1],
  // ];
  const grid = [[0, 2]];
  const res = orangesRotting(grid);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(m x n)
// space O(m x n)

function orangesRotting(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  enum CellState {
    Empty = 0,
    Fresh = 1,
    Rotting = 2,
  }

  const queue: [number, number][] = [];
  const visited: boolean[][] = Array.from({ length: n }, () =>
    Array(m).fill(false)
  );

  // add all initial origins
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === CellState.Rotting) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  let count = -1;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const isValid = (x: number, y: number) => {
    return x >= 0 && x < n && y >= 0 && y < m;
  };

  // bfs
  while (queue.length > 0) {
    const iterationSize = queue.length;
    count++;

    for (let i = 0; i < iterationSize; i++) {
      const [row, col] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = row + dx;
        const ny = col + dy;

        if (
          isValid(nx, ny) &&
          !visited[nx][ny] &&
          grid[nx][ny] === CellState.Fresh
        ) {
          visited[nx][ny] = true;
          grid[nx][ny] = CellState.Rotting;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        return -1; // Fresh orange remains
      }
    }
  }

  return count === -1 ? 0 : count;
}

g75_41().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
