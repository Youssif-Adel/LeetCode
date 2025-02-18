// Solved

function commonFactors(a: number, b: number): number {
  let numb = 0;
  const lower = Math.min(a, b);

  for (let i = 1; i <= lower; i++) {
    if (a % i === 0 && b % i === 0) numb++;
  }

  return numb;
}
