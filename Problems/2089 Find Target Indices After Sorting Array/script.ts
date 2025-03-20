// Solved

function targetIndices(nums: number[], target: number): number[] {
  const ans: number[] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;

    if (nums[i] === target) ans.push(i);
  }

  return ans;
}
