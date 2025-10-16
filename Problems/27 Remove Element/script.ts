// Solved - 100%

function removeElement(nums: number[], val: number): number {
  let end = 0;

  for (let i = 0; i < nums.length - end; i++) {
    if (nums[i] !== val) continue;

    for (let j = nums.length - 1; j >= i; j--) {
      if (nums[j] === val) {
        nums.pop();
        continue;
      }
      nums[i] = nums.pop() as number;
      break;
    }
  }
  return nums.length;
}

console.log(removeElement([1], 1));
