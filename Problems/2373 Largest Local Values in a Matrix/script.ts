// Solved

function largestLocal(grid: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < grid.length - 2; i++) {
    result.push([]);

    for (let j = 0; j < grid.length - 2; j++) {
      let currentMax = 0;

      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          if (grid[k][l] > currentMax) currentMax = grid[k][l];
        }
      }

      result[result.length - 1].push(currentMax);
    }
  }

  return result;
}

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ]),
);
