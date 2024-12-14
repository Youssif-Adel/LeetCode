// Solved

function checkIfPangram(sentence: string): boolean {
  if (sentence.length < 26) return false;

  const set = new Set([...sentence]);

  if (set.size === 26) return true;
  return false;
}
