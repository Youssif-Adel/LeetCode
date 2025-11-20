// Solved

function pivotInteger(n: number): number {
  if (n === 1) return n;

  const sums: number[] = [];

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;

    sums[i - 1] = sum;
  }

  for (let i = 1; i < sums.length; i++) {
    if (sums[sums.length - 1] - sums[i - 1] === sums[i]) return i + 1;
  }

  return -1;
}

console.log(pivotInteger(8));
