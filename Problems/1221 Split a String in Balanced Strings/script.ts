// Solved

function balancedStringSplit(s: string): number {
  let numberOfStrings: number = 0;

  let numberOfRs = 0;
  let numberOfLs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      numberOfRs++;
    } else {
      numberOfLs++;
    }

    if (numberOfLs === numberOfRs && numberOfLs !== 0) {
      numberOfLs = 0;
      numberOfRs = 0;
      numberOfStrings++;
    }
  }

  return numberOfStrings;
}

console.log(balancedStringSplit("RLRRLLRLRL"));
