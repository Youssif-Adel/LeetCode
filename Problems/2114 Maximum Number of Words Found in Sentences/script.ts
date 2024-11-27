function mostWordsFound(sentences: string[]): number {
  return sentences.reduce((previousValue, currentValue) => {
    return previousValue > currentValue.split(" ").length
      ? previousValue
      : currentValue.split(" ").length;
  }, 0);
}
