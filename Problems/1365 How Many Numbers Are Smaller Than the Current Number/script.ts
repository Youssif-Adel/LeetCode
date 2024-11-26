// Solved

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sortedNums = [...nums].sort((a, b) => a - b);

  return nums.map((value) => sortedNums.indexOf(value));
}
