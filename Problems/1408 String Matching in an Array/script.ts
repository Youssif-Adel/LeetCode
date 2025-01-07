function stringMatching(words: string[]): string[] {
  words.sort((a, b) => b.length - a.length);

  let result: Set<string> = new Set();

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    for (let j = i + 1; j < words.length; j++) {
      if (currentWord.includes(words[j])) result.add(words[j]);
    }
  }

  return [...result];
}
