// Solved

function gcdOfOddEvenSums(n: number): number {
  let sumOfEven = 0,
    sumOfOdd = 0;

  for (let i = 0; i <= n * 2; i += 2) {
    sumOfEven += i;
  }

  for (let i = 1; i < n * 2; i += 2) {
    sumOfOdd += i;
  }

  for (let i = sumOfOdd; i > 0; i--) {
    if (sumOfOdd % i === 0 && sumOfEven % i === 0) return i;
  }

  return -1;
}
