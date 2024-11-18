// Solved

function finalValueAfterOperations(operations: string[]): number {
  let x = 0;

  operations.forEach((operation) => {
    if (operation.includes("+")) {
      x++;
    } else {
      x--;
    }
  });

  return x;
}
