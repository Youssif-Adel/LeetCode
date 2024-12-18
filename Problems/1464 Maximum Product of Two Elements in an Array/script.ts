// Solved

function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);

  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
}

console.log(maxProduct([1, 5, 4, 5]));
