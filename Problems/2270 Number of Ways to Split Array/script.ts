function waysToSplitArray(nums: number[]): number {
  if (nums.length < 2) return 0;

  const length = nums.length;

  let totalSum = 0;
  for (let i = 0; i < length; i++) {
    totalSum += nums[i];
  }

  let currentSum = 0;
  let totalSplits = 0;
  for (let i = 0; i < length - 1; i++) {
    currentSum += nums[i];
    if (currentSum >= totalSum - currentSum) totalSplits++;
  }

  return totalSplits;
}

console.log(waysToSplitArray([-2, -1]));
