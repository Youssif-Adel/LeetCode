// Solved

function prefixCount(words: string[], pref: string): number {
  return words.reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue.startsWith(pref) ? 1 : 0),
    0,
  );
}
