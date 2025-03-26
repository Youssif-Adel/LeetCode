// Solved

function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map<number, number>();
  let highestCount = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = [...i.toString()].reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0,
    );

    const currentCount = (map.get(sum) || 0) + 1;

    if (currentCount > highestCount) highestCount = currentCount;

    map.set(sum, currentCount);
  }

  return highestCount;
}
