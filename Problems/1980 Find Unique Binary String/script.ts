// Solved

function findDifferentBinaryString(nums: string[]): string {
  const length = nums.length;
  const maxValue = Math.pow(2, length);

  const numbers: number[] = nums.map((value) => parseInt(value, 2));
  const sortedNums = numbers.sort((a, b) => a - b);

  for (let i = 0; i < maxValue; i++) {
    if (sortedNums[i] !== i) return i.toString(2).padStart(length, "0");
  }

  return "";
}

console.log(findDifferentBinaryString(["111", "011", "001"]));
