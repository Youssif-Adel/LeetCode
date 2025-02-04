function maxAscendingSum(nums: number[]): number {
  let maximumSum = 0;
  let currentSum = 0,
    previousNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > previousNumber) currentSum += nums[i];
    else currentSum = nums[i];

    if (currentSum > maximumSum) maximumSum = currentSum;
    previousNumber = nums[i];
  }

  return maximumSum;
}

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
