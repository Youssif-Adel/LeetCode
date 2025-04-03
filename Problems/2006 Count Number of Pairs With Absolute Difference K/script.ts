// Solved

function countKDifference(nums: number[], k: number): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const used = new Set<number>();

    for (let j = i + 1; j < nums.length; j++) {
      const nextNumb = nums[j];
      if (used.has(nextNumb)) {
        res++;
        continue;
      }

      const diff = nums[i] - nextNumb;
      if (Math.abs(diff) === k) {
        used.add(nextNumb);
        res++;
      }
    }
  }
  return res;
}
