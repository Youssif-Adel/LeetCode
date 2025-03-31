// solved

// @ts-ignore
function minimumOperations(nums: number[]): number {
  let previousOperations = 0;
  nums.sort((a, b) => a - b);

  let biggestNumb = nums[nums.length - 1];

  let i = 0;
  let numOfOperations = 0;
  while (biggestNumb) {
    const currentOperation = nums[i] - previousOperations;
    if (currentOperation === 0) {
      i++;
      continue;
    }
    biggestNumb -= currentOperation;
    previousOperations += currentOperation;
    i++;
    numOfOperations++;
  }

  return numOfOperations;
}

console.log(minimumOperations([1, 5, 0, 3, 5]));
