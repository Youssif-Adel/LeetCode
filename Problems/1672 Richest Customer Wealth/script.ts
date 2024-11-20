// Solved

function maximumWealth(accounts: number[][]): number {
  let highestSum: number = 0;

  accounts.forEach((account) => {
    let currentSum: number;
    currentSum = account.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    if (currentSum > highestSum) highestSum = currentSum;
  });

  return highestSum;
}
