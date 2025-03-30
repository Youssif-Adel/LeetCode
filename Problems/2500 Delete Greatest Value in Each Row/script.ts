function deleteGreatestValue(grid: number[][]): number {
  const sortedGrid = grid.map((value) => value.toSorted((a, b) => b - a));
  const rowLength = grid[0].length;
  const length = grid.length;
  let res = 0;

  for (let i = 0; i < rowLength; i++) {
    let biggestVal = 0;

    for (let j = 0; j < length; j++) {
      let val = sortedGrid[j][i];
      if (val > biggestVal) biggestVal = val;
    }
    console.log(biggestVal);

    res += biggestVal;
  }

  return res;
}

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ]),
);
