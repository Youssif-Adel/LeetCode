function transformArray(nums: number[]): number[] {
  const res: number[] = [];

  for (let num of nums) {
    const temp = num % 2;

    if (temp) res.push(temp);
    else res.unshift(temp);
  }

  return res;
}
