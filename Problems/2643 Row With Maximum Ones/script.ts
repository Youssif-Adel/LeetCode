function rowAndMaximumOnes(mat: number[][]): number[] {
  let smallestRow: [number, number] = [0, 0];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    let numOfOnes = row.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue === 1 ? 1 : 0),
      0,
    );

    if (numOfOnes > smallestRow[1]) smallestRow = [i, numOfOnes];
  }

  return smallestRow;
}
