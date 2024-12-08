// Solved

function arithmeticTriplets(nums: number[], diff: number): number {
  let numberOfT = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const rest = nums.slice(i + 1);

    if (rest.indexOf(nums[i] + diff) !== -1) {
      if (rest.indexOf(nums[i] + diff + diff) !== -1) {
        numberOfT++;
      }
    }
  }

  return numberOfT;
}
