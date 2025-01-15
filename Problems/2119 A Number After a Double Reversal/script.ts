// Solved

function isSameAfterReversals(num: number): boolean {
  const stringNum = num.toString();

  if (stringNum.length === 1) return true;

  return stringNum[stringNum.length - 1] !== "0";
}
