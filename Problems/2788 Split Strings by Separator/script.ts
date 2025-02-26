// Solved

function splitWordsBySeparator(words: string[], separator: string): string[] {
  const res: string[] = [];
  let start = 0;

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === separator) {
        const slice = word.slice(start, i);
        if (slice.length) res.push(word.slice(start, i));
        start = i + 1;
      }
    }
    const slice = word.slice(start);
    if (slice.length) res.push(word.slice(start));
    start = 0;
  }

  return res;
}
