function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;

  const freq = new Array(n * n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const numb = grid[i][j];
      freq[numb] += 1;
    }
  }

  const ans = [];

  for (let i = 1; i < freq.length; i++) {
    if (freq[i] > 1) ans[0] = i;
    if (freq[i] === 0) ans[1] = i;
  }

  return ans;
}
