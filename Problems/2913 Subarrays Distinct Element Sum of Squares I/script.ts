// Solved

function sumCounts(nums: number[]): number {
  let sum = 0;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length - i; j++) {
      const set = new Set(nums.slice(j, j + i));
      sum += Math.pow(set.size, 2);
    }
  }

  return sum;
}

console.log(sumCounts([1, 2, 1]));
