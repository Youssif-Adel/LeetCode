// Solved

function sumOfSquares(nums: number[]): number {
  const length = nums.length;
  return nums.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue +
      (length % (currentIndex + 1) === 0 ? Math.pow(currentValue, 2) : 0),
    0,
  );
}
