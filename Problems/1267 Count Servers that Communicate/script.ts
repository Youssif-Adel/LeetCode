// Solved

function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const rows: number[] = new Array(m).fill(0);
  const columns: number[] = new Array(n).fill(0);

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rows[i] += 1;
        columns[j] += 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) if (rows[i] > 1 || columns[j] > 1) result++;
    }
  }

  return result;
}

console.log(
  countServers([
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]),
);
