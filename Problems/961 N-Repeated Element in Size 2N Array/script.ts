// Solved

function repeatedNTimes(nums: number[]): number {
  const appeared = new Set();

  for (let num of nums) {
    if (appeared.has(num)) return num;
    appeared.add(num);
  }

  return 0;
}
