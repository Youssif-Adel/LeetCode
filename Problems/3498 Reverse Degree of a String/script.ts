// Solved

function reverseDegree(s: string): number {
  return Array.from(s).reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue +
      (26 - (currentValue.charCodeAt(0) - 97)) * (currentIndex + 1),
    0,
  );
}
