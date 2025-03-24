// Solved

function percentageLetter(s: string, letter: string): number {
  let numOfLetter = 0;

  for (let sElement of s) {
    if (sElement === letter) numOfLetter++;
  }

  return Math.floor((numOfLetter / s.length) * 100);
}
