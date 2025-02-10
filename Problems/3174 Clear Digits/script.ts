// Solved

function clearDigits(s: string): string {
  const characterIndexes: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) characterIndexes.push(i);
    else {
      if (characterIndexes.length) {
        const lastIndex = characterIndexes[characterIndexes.length - 1];
        s = s.slice(0, lastIndex) + s.slice(lastIndex + 1, i) + s.slice(i + 1);
        characterIndexes.pop();
        i -= 2;
      } else {
        s = s.slice(0, i) + s.slice(i + 1);
        i--;
      }
    }
  }

  return s;
}

console.log(clearDigits("cb34"));
