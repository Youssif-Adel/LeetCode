// Solved

function countSymmetricIntegers(low: number, high: number): number {
  let num = 0;

  for (let i = low; i <= high; i++) {
    if (isSymmetric(i)) num++;
  }

  function isSymmetric(num: number) {
    const stringNum = num.toString();
    if (stringNum.length % 2 !== 0) return false;

    const firstHalf = [...stringNum.slice(0, stringNum.length / 2)].reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0,
    );

    const lastHalf = [...stringNum.slice(stringNum.length / 2)].reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0,
    );
    return firstHalf === lastHalf;
  }

  return num;
}

console.log(countSymmetricIntegers(1, 100));
