function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (word[0] !== s[index]) {
      return false;
    }
  }

  return true;
}
