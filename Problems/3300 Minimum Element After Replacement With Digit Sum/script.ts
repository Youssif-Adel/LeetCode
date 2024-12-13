function minElement(nums: number[]): number {
  let minNum: number = Infinity;

  nums.forEach((value) => {
    const num = [...value.toString()].reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0,
    );

    if (num < minNum) minNum = num;
  });

  return minNum;
}

console.log(minElement([10, 12, 13, 14]));
