// Solve

function createTargetArray(nums: number[], index: number[]): number[] {
  let result: number[] = [];

  index.forEach((value, index) => {
    result = result
      .slice(0, value)
      .concat(nums[index])
      .concat(result.slice(value));
  });

  return result;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
