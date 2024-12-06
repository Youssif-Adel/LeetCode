// Solved

function numberGame(nums: number[]): number[] {
  const sortedArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i += 2) {
    [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
  }

  return sortedArr;
}
