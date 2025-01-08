// Solved

function countPrefixSuffixPairs(words: string[]): number {
  let numb = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) numb++;
    }
  }

  function isPrefixAndSuffix(str1: string, str2: string): boolean {
    const length1 = str1.length;
    const length2 = str2.length;

    if (length2 < length1) return false;

    for (let i = 0; i < str1.length; i++) {
      if (str2[i] !== str1[i]) return false;
      if (str2[length2 - 1 - i] !== str1[length1 - 1 - i]) return false;
    }

    return true;
  }

  return numb;
}
