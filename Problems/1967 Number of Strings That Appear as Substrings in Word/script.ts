function numOfStrings(patterns: string[], word: string): number {
  let num = 0;

  patterns.forEach((value) => {
    word.includes(value) ? num++ : null;
  });

  return num;
}
