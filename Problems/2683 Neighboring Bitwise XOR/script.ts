// Solved

function doesValidArrayExist(derived: number[]): boolean {
  let currentNumber = 1;

  for (const num of derived) {
    if (num === 1) currentNumber = currentNumber === 1 ? 0 : 1;
  }

  return currentNumber === 1;
}

console.log(doesValidArrayExist([1, 1, 0]));
