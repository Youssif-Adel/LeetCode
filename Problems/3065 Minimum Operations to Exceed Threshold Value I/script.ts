// Solved

function minOperations(nums: number[], k: number): number {
  return nums.reduce(
    (previousValue, currentValue) => previousValue + (currentValue < k ? 1 : 0),
    0,
  );
}
