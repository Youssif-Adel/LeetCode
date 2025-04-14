// Solved

function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number,
): number {
  let numGoodTriplets = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const num1 = arr[i];

    for (let j = i + 1; j < arr.length - 1; j++) {
      const num2 = arr[j];

      if (Math.abs(num1 - num2) <= a) {
        for (let k = j + 1; k < arr.length; k++) {
          const num3 = arr[k];

          if (Math.abs(num2 - num3) <= b && Math.abs(num1 - num3) <= c)
            numGoodTriplets++;
        }
      }
    }
  }

  return numGoodTriplets;
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
