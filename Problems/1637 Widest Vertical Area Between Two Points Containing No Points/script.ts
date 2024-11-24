// Solved

function maxWidthOfVerticalArea(points: number[][]): number {
  const xArray = points.map((value) => value[0]);
  xArray.sort((a, b) => a - b);

  let widestLength = 0;

  for (let i = 0; i < xArray.length - 1; i++) {
    if (xArray[i + 1] - xArray[i] > widestLength)
      widestLength = xArray[i + 1] - xArray[i];
  }

  return widestLength;
}
