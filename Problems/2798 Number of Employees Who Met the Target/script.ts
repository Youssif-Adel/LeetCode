// Solved

function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number,
): number {
  return hours.reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue >= target ? 1 : 0),
    0,
  );
}
