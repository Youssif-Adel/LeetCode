// Solved

function findPermutationDifference(s: string, t: string): number {
  return [...s].reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + Math.abs(currentIndex - t.indexOf(currentValue)),
    0,
  );
}
