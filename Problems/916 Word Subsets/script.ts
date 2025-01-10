// Solved

function wordSubsets(words1: string[], words2: string[]): string[] {
  const words2Freq: number[] = new Array(26).fill(0);

  for (const word of words2) {
    const charFreq: number[] = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      charFreq[word.charCodeAt(i) % 97] += 1;
    }

    for (let i = 0; i < 26; i++) {
      words2Freq[i] = Math.max(charFreq[i], words2Freq[i]);
    }
  }

  let result: string[] = [];

  for (const word of words1) {
    const charFreq: number[] = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      charFreq[word.charCodeAt(i) % 97] += 1;
    }

    if (isUniversal(charFreq, words2Freq)) result.push(word);
  }

  return result;
}

function isUniversal(freq1: number[], freq2: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (freq1[i] < freq2[i]) return false;
  }

  return true;
}

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"],
  ),
);
