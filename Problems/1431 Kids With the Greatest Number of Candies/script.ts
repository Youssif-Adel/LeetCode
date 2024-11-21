// Solved

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatestAmount = Math.max(...candies);

  return candies.map((value) => value + extraCandies >= greatestAmount);
}
