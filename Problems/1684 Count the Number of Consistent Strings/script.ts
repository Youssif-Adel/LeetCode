// Solved

function countConsistentStrings(allowed: string, words: string[]): number {
  let count = 0;

  words.forEach((word) => {
    if (
      [...word].reduce(
        (previousValue, currentValue) =>
          previousValue && allowed.includes(currentValue),
        true,
      )
    )
      count++;
  });

  return count;
}
