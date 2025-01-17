// Solved

function selfDividingNumbers(left: number, right: number): number[] {
  const ans: number[] = [];

  for (let i = left; i <= right; i++) {
    const stringNum = i.toString();

    if (stringNum.includes("0")) continue;

    let isOkay = true;
    for (let j = 0; j < stringNum.length; j++) {
      if (i % parseInt(stringNum[j]) !== 0) {
        isOkay = false;
        break;
      }
    }

    if (isOkay) ans.push(i);
  }

  return ans;
}
