// https://leetcode.com/problems/word-search/
// #dfs

async function g75_() {
  // script here
  const res = exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(m * n * 4^L)
// space O(L)

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  const key = (x: number, y: number): string => `${x},${y}`;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const isValid = (x: number, y: number): boolean => {
    return x >= 0 && x < n && y >= 0 && y < m;
  };

  const navigate = (
    [x, y]: [number, number],
    index: number,
    visited: Set<string>
  ): boolean => {
    if (index === word.length) return true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const k = key(nx, ny);

      if (isValid(nx, ny) && !visited.has(k) && board[ny][nx] === word[index]) {
        visited.add(k);
        if (navigate([nx, ny], index + 1, visited)) return true;
        visited.delete(k);
      }
    }

    return false;
  };

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === word[0]) {
        const visited = new Set<string>();
        visited.add(key(x, y));
        if (navigate([x, y], 1, visited)) return true;
      }
    }
  }

  return false;
}

g75_().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
