// Solved

function minOperations(nums: number[]): number {
  let numOfOperations = 0;

  for (let i = 1; i < nums.length; i++) {
    const previousNum = nums[i - 1];
    const currentNum = nums[i];

    if (previousNum >= currentNum) {
      const difference = previousNum - currentNum + 1;
      numOfOperations += difference;
      nums[i] += difference;
    }
  }

  return numOfOperations;
}
