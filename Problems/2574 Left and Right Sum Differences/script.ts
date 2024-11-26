// Solved

function leftRightDifference(nums: number[]): number[] {
  const totalSum = nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );

  // total sum = nums[i] + left + right

  return nums.map((value, index) => {
    let currentSum = 0;
    for (let i = index + 1; i < nums.length; i++) {
      currentSum += nums[i];
    }

    return Math.abs(totalSum - value - currentSum - currentSum);
  });
}

console.log(leftRightDifference([10, 4, 8, 3]));
