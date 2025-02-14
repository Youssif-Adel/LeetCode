// Solved

function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  let numb = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) numb++;
  }

  return numb;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
