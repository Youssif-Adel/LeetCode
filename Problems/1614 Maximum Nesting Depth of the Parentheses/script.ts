// Solved

function maxDepth(s: string): number {
  let maximum = 0,
    currentNumber = 0;

  [...s].forEach((value) => {
    if (value === "(") {
      currentNumber++;
      if (currentNumber > maximum) maximum = currentNumber;
    } else if (value === ")") {
      currentNumber--;
    }
  });

  return maximum;
}
