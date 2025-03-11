// Solved

function countOperations(num1: number, num2: number): number {
  let num = 0;

  while (num1 !== 0 && num2 !== 0) {
    if (num2 > num1) {
      num2 -= num1;
      num++;
    } else if (num1 > num2) {
      num1 -= num2;
      num++;
    } else {
      num1 = 0;
      num2 = 0;
      num += 1;
    }
  }

  return num;
}

console.log(countOperations(2, 3));
