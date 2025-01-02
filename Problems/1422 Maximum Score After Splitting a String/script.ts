// Solved

function maxScore(s: string): number {
  let max;
  let pointer = 1;

  let left = [...s.slice(0, pointer)].reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue === "0" ? 1 : 0),
    0,
  );

  let right = [...s.slice(pointer)].reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue === "1" ? 1 : 0),
    0,
  );

  max = left + right;

  while (pointer < s.length - 1) {
    pointer += 1;

    left += s[pointer - 1] === "0" ? 1 : 0;

    right -= s[pointer - 1] === "1" ? 1 : 0;

    if (left + right > max) max = left + right;
  }

  return max;
}

console.log(maxScore("00111"));
