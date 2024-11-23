// Solved

function minBitFlips(start: number, goal: number): number {
  const startBin = start.toString(2).padStart(goal.toString(2).length, "0");
  const goalBin = goal.toString(2).padStart(start.toString(2).length, "0");

  return [...startBin].reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + (currentValue === goalBin[currentIndex] ? 0 : 1),
    0,
  );
}

console.log(minBitFlips(10, 7));
