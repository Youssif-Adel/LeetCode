function canAliceWin(nums: number[]): boolean {
  let single = 0,
    double = 0;

  nums.forEach((value) => {
    if (value > 9) double += value;
    else single += value;
  });

  return single !== double;
}
