// Solved

function countDigits(num: number): number {
  return Array.from(num.toString()).reduce(
    (previousValue, currentValue) =>
      num % Number(currentValue) === 0 ? previousValue + 1 : previousValue,
    0,
  );
}
