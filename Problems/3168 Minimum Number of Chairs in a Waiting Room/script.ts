// Solved

function minimumChairs(s: string): number {
  let max = 0,
    current = 0;

  for (let sElement of s) {
    if (sElement === "E") {
      current++;
      if (current > max) max = current;
    } else current--;
  }

  return max;
}
