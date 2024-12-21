function countAsterisks(s: string): number {
  const arr = s.split("|");

  let numb = 0;

  for (let i = 0; i < arr.length; i += 2) {
    numb += [...arr[i]].reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue === "*" ? 1 : 0),
      0,
    );
  }

  return numb;
}
