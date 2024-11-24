// Solved

function countPairs(nums: number[], target: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) sum++;
    }
  }

  return sum;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
