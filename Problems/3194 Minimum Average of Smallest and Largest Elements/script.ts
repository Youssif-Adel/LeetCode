// Solved

function minimumAverage(nums: number[]): number {
  const average: number[] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length / 2; i++) {
    average.push((nums[i] + nums[nums.length - 1 - i]) / 2);
  }

  return Math.min(...average);
}

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
