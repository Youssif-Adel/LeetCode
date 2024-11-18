// Solved

function differenceOfSums(n: number, m: number): number {
  let num1 = 0,
    num2 = 0;

  for (let i = 1; i < n + 1; i++) {
    if (i % m === 0) {
      num2 += i;
    } else {
      num1 += i;
    }
  }

  return num1 - num2;
}
