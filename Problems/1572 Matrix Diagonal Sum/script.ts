function diagonalSum(mat: number[][]): number {
  const nums: number[] = [];

  mat.forEach((value) => nums.push(...value));

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}
