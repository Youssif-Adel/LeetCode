// Solved

function uniquePaths(m: number, n: number): number {
  const map: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(null));

  function followPath(x: number, y: number) {
    if (map[x][y]) return map[x][y];

    let paths = 0;
    if (m > x + 1) paths += followPath(x + 1, y);
    if (n > y + 1) paths += followPath(x, y + 1);
    map[x][y] = paths;
    if (x === m - 1 && y === n - 1) paths++;
    return paths;
  }

  return followPath(0, 0);
}

console.log(uniquePaths(3, 7));
