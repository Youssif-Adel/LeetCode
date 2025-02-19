// Solved

function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[],
): number[] {
  const freq: Map<number, number> = new Map();
  const ans: number[] = [];

  const arrays = [nums1, nums2, nums3];

  for (let i = 0; i < arrays.length; i++) {
    const set = new Set(arrays[i]);

    for (let number of set) {
      const freqOfNumber = freq.get(number) || 0;

      if (freqOfNumber === 1) ans.push(number);

      freq.set(number, freqOfNumber + 1);
    }
  }

  return ans;
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
