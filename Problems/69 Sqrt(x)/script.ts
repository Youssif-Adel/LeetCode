// Solved

function mySqrt(x: number): number {
  if (x === 1) return 1;
  let lowestPoint = 0;
  let highestPoint = x;

  for (let i = 0; i < 100; i++) {
    const currentAnswer = (lowestPoint + highestPoint) / 2;
    if (currentAnswer * currentAnswer === x || i == 99) {
      return Math.floor(currentAnswer);
    } else if (currentAnswer * currentAnswer > x) {
      highestPoint = currentAnswer;
    } else {
      lowestPoint = currentAnswer;
    }
  }
  return 0;
}
