//Solved

function sortArrayByParityII(nums: number[]): number[] {
  const res: number[] = new Array(nums.length);
  let lastEvenIndex = 0,
    lastOddIndex = 1;

  for (let num of nums) {
    if (num % 2 === 0) {
      res[lastEvenIndex] = num;
      lastEvenIndex += 2;
    } else {
      res[lastOddIndex] = num;
      lastOddIndex += 2;
    }
  }

  return res;
}
