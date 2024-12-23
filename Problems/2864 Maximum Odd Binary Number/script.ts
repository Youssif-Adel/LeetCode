function maximumOddBinaryNumber(s: string): string {
  let num = "";

  const numberOfOnes = [...s].reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue === "1" ? 1 : 0),
    0,
  );

  for (let i = 0; i < s.length - 1; i++) {
    if (i < numberOfOnes - 1) num += "1";
    else num += "0";
  }

  if (numberOfOnes) num += 1;

  return num;
}

console.log(maximumOddBinaryNumber("0101"));
