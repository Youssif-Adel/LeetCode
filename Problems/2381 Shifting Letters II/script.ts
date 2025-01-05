function shiftingLetters(s: string, shifts: number[][]): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const shiftsArray = new Array(s.length).fill(0);

  for (const [start, end, direction] of shifts) {
    const shift = direction === 1 ? 1 : -1;
    shiftsArray[start] += shift;
    shiftsArray[end] -= shift;
  }

  let currentShift = shiftsArray[0];
  let res = "";

  console.log(shiftsArray);

  for (let i = 0; i < shiftsArray.length; i++) {
    res +=
      alphabet[
        (s.charCodeAt(i) % 26) +
          (shiftsArray[i] >= 0 ? shiftsArray[i] : 26 - shiftsArray[i])
      ];

    currentShift = shiftsArray[i] - currentShift;
  }

  return res;
}

console.log(
  shiftingLetters("abc", [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ]),
);
