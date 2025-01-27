function totalMoney(n: number): number {
  let sum = 0;
  let num = 1;
  let weeklyStart = 1;

  for (let i = 1; i < n + 1; i++) {
    sum += num;
    num++;
    if (i % 7 === 0) {
      weeklyStart++;
      num = weeklyStart;
    }
  }

  return sum;
}

console.log(totalMoney(20));
