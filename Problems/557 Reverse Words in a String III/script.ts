// Solved

function reverseWords(s: string): string {
  return s
    .split(" ")
    .reduce(
      (previousValue, currentValue) =>
        previousValue + " " + [...currentValue].reverse().join(""),
      "",
    )
    .trim();
}
