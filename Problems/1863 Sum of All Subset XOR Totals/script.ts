function subsetXORSum(nums: number[]): number {
  let sum = 0;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length - (i === nums.length ? i - 1 : 0); j++) {
      let currentSum = 0;
      for (let k = j; k < j + i; k++) {
        currentSum ^= nums[k % nums.length];
      }
      console.log(currentSum);
      sum += currentSum;
    }
  }

  return sum;
}

console.log(subsetXORSum([5, 1, 6]));
