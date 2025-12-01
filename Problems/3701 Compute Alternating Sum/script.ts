// Solved

function alternatingSum(nums: number[]): number {
  return nums.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + currentValue * (currentIndex % 2 === 0 ? -1 : 1) * -1,
    0,
  );
}

console.log(2 % 2);
