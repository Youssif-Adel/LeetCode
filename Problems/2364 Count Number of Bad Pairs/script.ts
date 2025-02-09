function countBadPairs(nums: number[]): number {
  const length = nums.length;
  const totalNumberOfPairs = (length * (length - 1)) / 2;
  let numberOfGoodPairs = 0;
  let hash: Map<number, number> = new Map();

  for (let i = 0; i < length; i++) {
    const numb = nums[i] - i;

    const count = hash.get(numb) || 0;
    if (count > 0) numberOfGoodPairs += count;
    hash.set(numb, count + 1);
  }

  return totalNumberOfPairs - numberOfGoodPairs;
}

console.log(countBadPairs([4, 1, 3, 3]));
