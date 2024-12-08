// Solved

function differenceOfSum(nums: number[]): number {
  let elementSum = 0;
  let digitSum = 0;

  nums.forEach((value) => {
    elementSum += value;

    digitSum += [...value.toString()].reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0,
    );
  });

  return Math.abs(elementSum - digitSum);
}
