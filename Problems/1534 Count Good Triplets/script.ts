function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number,
): number {
  let numberOfTriplets = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const numb1 = arr[i];
    const numb2 = arr[i + 1];
    const numb3 = arr[i + 2];

    if (
      Math.abs(numb1 - numb2) <= a &&
      Math.abs(numb2 - numb3) <= b &&
      Math.abs(numb1 - numb3) <= c
    )
      numberOfTriplets++;
  }

  return numberOfTriplets;
}
