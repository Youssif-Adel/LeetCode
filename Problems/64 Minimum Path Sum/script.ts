// Solved

function minPathSum(grid: number[][]): number {
  const m = grid.length; // y
  const n = grid[0].length; // x
  const map: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(null));

  if (m === 1 && n === 1) return grid[0][0];

  let lowest = Infinity;

  function followPath(x: number, y: number) {
    if (x === n - 1 && y === m - 1) return grid[y][x];

    let pathX = Infinity,
      pathY = Infinity;

    if (map[y][x]) return map[y][x];
    if (x + 1 < n) pathX = followPath(x + 1, y);
    if (y + 1 < m) pathY = followPath(x, y + 1);

    const lowestPath = Math.min(pathX, pathY) + grid[y][x];

    map[y][x] = lowestPath;

    if (x === 0 && y === 0) if (lowestPath < lowest) lowest = lowestPath;
    return lowestPath;
  }

  followPath(0, 0);

  return lowest;
}

console.log(minPathSum([[0]]));
