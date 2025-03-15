// Solved

function applyOperations(nums: number[]): number[] {
  let numOfZeros = 0;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numOfZeros++;
      continue;
    }

    if (nums[i] === nums[i + 1]) {
      res.push(nums[i] * 2);
      nums[i + 1] = 0;
      numOfZeros++;
      i++;
    } else res.push(nums[i]);
  }

  for (let i = 0; i < numOfZeros; i++) {
    res.push(0);
  }

  return res;
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
