// Solved

function halvesAreAlike(s: string): boolean {
  const half = s.length / 2;

  function countVowels(startIndex: number, endIndex: number) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let numb = 0;
    for (let i = startIndex; i < endIndex; i++) {
      if (vowels.has(s[i])) numb++;
    }

    return numb;
  }

  return countVowels(0, half) === countVowels(half, s.length);
}
