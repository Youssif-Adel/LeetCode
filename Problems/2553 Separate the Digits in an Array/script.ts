function separateDigits(nums: number[]): number[] {
  const ans = [];

  for (let num of nums) {
    const stringNum = num.toString();

    for (let ch of stringNum) {
      ans.push(parseInt(ch));
    }
  }

  return ans;
}
