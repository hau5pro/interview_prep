// https://leetcode.com/problems/number-of-islands/
// #matrix #bfs

async function g75_40() {
  // script here
  // const grid = [
  //   ["1", "1", "1", "1", "0"],
  //   ["1", "1", "0", "1", "0"],
  //   ["1", "1", "0", "0", "0"],
  //   ["0", "0", "0", "0", "0"],
  // ];
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  const res = numIslands(grid);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(m x n)
// space O(m x n)

function numIslands(grid: string[][]): number {
  let numIslands = 0;

  const ISLAND = "1";
  const width = grid.length;
  const height = grid[0] !== null ? grid[0].length : 0;

  const visited = new Set<string>();
  const directions = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const isValidCell = (x: number, y: number): boolean => {
    return x >= 0 && x < width && y >= 0 && y < height;
  };
  const key = (x: number, y: number) => {
    return `${x},${y}`;
  };

  const bfs = (x: number, y: number) => {
    const queue: { x: number; y: number }[] = [{ x: x, y: y }];
    visited.add(key(x, y));

    while (queue.length > 0) {
      const coords = queue.shift();

      for (const direction of directions) {
        const newX = coords.x + direction.x;
        const newY = coords.y + direction.y;

        if (
          isValidCell(newX, newY) &&
          grid[coords.x][coords.y] === ISLAND &&
          !visited.has(key(newX, newY))
        ) {
          queue.push({ x: newX, y: newY });
          visited.add(key(newX, newY));
        }
      }
    }
  };

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] === ISLAND && !visited.has(key(i, j))) {
        bfs(i, j);
        numIslands++;
      }
    }
  }

  return numIslands;
}

g75_40().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
