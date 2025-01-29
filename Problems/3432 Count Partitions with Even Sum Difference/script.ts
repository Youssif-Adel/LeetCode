function countPartitions(nums: number[]): number {
  const length = nums.length;

  const leftSum = new Array(length);
  const rightSum = new Array(length);

  let leftPrefix = 0,
    rightPrefix = 0;

  for (let i = 0; i < length; i++) {
    leftPrefix += nums[i];
    leftSum[i] = leftPrefix;

    rightPrefix += nums[length - 1 - i];
    rightSum[length - 1 - i] = rightPrefix;
  }

  let result = 0;

  for (let i = 0; i < length - 1; i++) {
    if ((leftSum[i] - rightSum[i + 1]) % 2 === 0) result++;
  }

  return result;
}

console.log(countPartitions([10, 10, 3, 7, 6]));
