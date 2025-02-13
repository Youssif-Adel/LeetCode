function maximumNumberOfStringPairs(words: string[]): number {
  const wordLength = 2;
  let length = words.length;
  let numberOfPairs = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (isEqualReverse(i, j)) {
        words[j] = words[length - 1];
        length -= 1;
        numberOfPairs++;
      }
    }
  }

  function isEqualReverse(index1: number, index2: number): boolean {
    for (let i = 0; i < wordLength; i++) {
      if (words[index1].charAt(i) !== words[index2].charAt(wordLength - i - 1))
        return false;
    }

    return true;
  }

  return numberOfPairs;
}
