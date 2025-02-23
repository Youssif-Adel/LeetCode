function returnToBoundaryCount(nums: number[]): number {
  let ans = 0;
  let count = 0;

  for (let num of nums) {
    count += num;

    if (count === 0) ans++;
  }

  return ans;
}
