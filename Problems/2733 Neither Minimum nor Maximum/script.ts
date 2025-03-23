// Solved

function findNonMinOrMax(nums: number[]): number {
  if (nums.length <= 2) return -1;

  nums.sort((a, b) => a - b);

  return nums[1];
}

console.log(findNonMinOrMax([3, 2, 1, 4]));
