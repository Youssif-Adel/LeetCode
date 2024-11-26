// Solved

function runningSum(nums: number[]): number[] {
  const runningSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    runningSum.push(nums[i] + (runningSum[i - 1] || 0));
  }

  return runningSum;
}

console.log(runningSum([1, 2, 3, 4]));
