function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const sum = [...x.toString()].reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    0,
  );

  return x % sum === 0 ? sum : -1;
}
