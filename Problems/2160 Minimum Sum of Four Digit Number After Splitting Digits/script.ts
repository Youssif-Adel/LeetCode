function minimumSum(num: number): number {
  const numArr = [...num.toString()].sort((a, b) => parseInt(a) - parseInt(b));

  return parseInt(numArr[0] + numArr[3]) + parseInt(numArr[1] + numArr[2]);
}
