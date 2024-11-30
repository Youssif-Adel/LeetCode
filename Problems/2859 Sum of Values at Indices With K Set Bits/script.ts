function sumIndicesWithKSetBits(nums: number[], k: number): number {
  return nums.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + (legal(currentIndex, k) ? currentValue : 0),
    0,
  );
}

function legal(number: number, k: number): boolean {
  return (
    [...number.toString(2)].reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue === "1" ? 1 : 0),
      0,
    ) === k
  );
}
