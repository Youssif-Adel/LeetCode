// Solved

function sumBase(n: number, k: number): number {
  return [...n.toString(k)].reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    0,
  );
}
