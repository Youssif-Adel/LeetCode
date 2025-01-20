// Solved

function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  const rows: number[] = new Array(m).fill(0);
  const columns: number[] = new Array(n).fill(0);
  const numPosition: Map<number, [number, number]> = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      numPosition.set(mat[i][j], [i, j]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (numPosition.has(num)) {
      const [row, col] = numPosition.get(num)!;

      rows[row] += 1;
      if (rows[row] === n) return i;

      columns[col] += 1;
      if (columns[col] === m) return i;
    }
  }

  return 0;
}

console.log(
  firstCompleteIndex(
    [6, 2, 3, 1, 4, 5],
    [
      [5, 1],
      [2, 4],
      [6, 3],
    ],
  ),
);
