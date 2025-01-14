function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const length = A.length;

  const freq = new Array(length).fill(0);

  let res: number[] = [];

  for (let i = 0; i < length; i++) {
    const indexA = A[i] - 1,
      indexB = B[i] - 1;

    freq[indexA] += 1;
    freq[indexB] += 1;

    res[i] =
      (res[i - 1] ?? 0) +
      (freq[indexA] === 2 ? 1 : 0) +
      (freq[indexB] === 2 && indexA !== indexB ? 1 : 0);
  }

  return res;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
