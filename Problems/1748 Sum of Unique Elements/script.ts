// Solved

function sumOfUnique(nums: number[]): number {
  const freq: number[] = new Array(101).fill(0);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    freq[num] += 1;

    const frequency = freq[num];

    if (frequency === 1) sum += num;
    if (frequency === 2) sum -= num;
  }

  return sum;
}
