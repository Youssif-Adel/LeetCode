// Solved

function maximizeSum(nums: number[], k: number): number {
  const max = Math.max(...nums);
  let result = 0;

  for (let i = 0; i < k; i++) {
    result += max + i;
  }

  return result;
}
