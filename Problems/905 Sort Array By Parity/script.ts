function sortArrayByParity(nums: number[]): number[] {
  const arr = [];

  for (let num of nums) {
    if (num % 2) arr.push(num);
    else arr.unshift(num);
  }

  return arr;
}
