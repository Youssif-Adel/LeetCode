// Solved

function numJewelsInStones(jewels: string, stones: string): number {
  return [...stones].reduce(
    (previousValue, currentValue) =>
      previousValue + (jewels.includes(currentValue) ? 1 : 0),
    0,
  );
}
