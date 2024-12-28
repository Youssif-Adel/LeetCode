function mergeAlternately(word1: string, word2: string): string {
  let resultantString = "";

  const max = Math.max(word1.length, word2.length);

  for (let i = 0; i < max; i++) {
    if (i < word1.length) resultantString += word1[i];
    if (i < word2.length) resultantString += word2[i];
  }

  return resultantString;
}

console.log(mergeAlternately("abc", "pqraaaa"));
