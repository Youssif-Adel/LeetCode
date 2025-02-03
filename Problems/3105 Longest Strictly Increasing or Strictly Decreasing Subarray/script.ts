// Solved

function longestMonotonicSubarray(nums: number[]): number {
  let longestLength = 0;

  let currentLength = 0;
  let previousNumber = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > previousNumber) currentLength++;
    else {
      if (currentLength > longestLength) longestLength = currentLength;
      currentLength = 1;
    }
    previousNumber = nums[i];
  }

  currentLength = 0;
  previousNumber = Infinity;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] < previousNumber) currentLength++;
    else {
      if (currentLength > longestLength) longestLength = currentLength;
      currentLength = 1;
    }
    previousNumber = nums[i];
  }

  return longestLength;
}

console.log(longestMonotonicSubarray([1, 1, 5]));
