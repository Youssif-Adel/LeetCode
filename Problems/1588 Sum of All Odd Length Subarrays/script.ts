// Solved

function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    let j = 0;

    while (j + i < arr.length + 1) {
      console.log(j);
      sum += arr
        .slice(j, j + i)
        .reduce(
          (previousValue, currentValue) => currentValue + previousValue,
          0,
        );
      j++;
    }
  }

  return sum;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
