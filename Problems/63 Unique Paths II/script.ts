// Solved

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length; // y
  const n = obstacleGrid[0].length; // x
  const map: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(null));

  function followPath(x: number, y: number) {
    let path = 0;
    if (obstacleGrid[y][x] === 1) return 0;
    if (x !== n - 1 && y !== m - 1 && map[y][x] !== null) return map[y][x];
    if (x + 1 < n && !obstacleGrid[y][x + 1]) path += followPath(x + 1, y);
    if (y + 1 < m && !obstacleGrid[y + 1][x]) path += followPath(x, y + 1);

    map[y][x] = path;

    if (x === n - 1 && y === m - 1) {
      return path + 1;
    }
    return path;
  }

  return followPath(0, 0);
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);
