// Solved

function isBalanced(num: string): boolean {
  let sumEven = 0,
    sumOdd = 0;

  [...num].forEach((value, index) => {
    if (index % 2 === 0) {
      sumEven += parseInt(value);
    } else {
      sumOdd += parseInt(value);
    }
  });

  return sumEven === sumOdd;
}
