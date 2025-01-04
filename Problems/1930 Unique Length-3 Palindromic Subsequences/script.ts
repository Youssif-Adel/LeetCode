// Solved

function countPalindromicSubsequence(s: string): number {
  let numberOfPal = 0;

  const usedChars = new Map();

  for (let i = 0; i < s.length - 2; i++) {
    const currentChar = s[i];

    if (!usedChars.has(currentChar.charCodeAt(0))) {
      usedChars.set(currentChar.charCodeAt(0), 1);

      const chars = new Set();

      let max = 0;

      let self = 0;
      for (let j = i + 1; j < s.length; j++) {
        const c = s[j];
        chars.add(c);
        if (c === currentChar) {
          self++;
          max = chars.size + (self === 1 ? -1 : 0);
        }
      }

      numberOfPal += max;
    }
  }

  return numberOfPal;
}

console.log(countPalindromicSubsequence("bbcbaba"));
