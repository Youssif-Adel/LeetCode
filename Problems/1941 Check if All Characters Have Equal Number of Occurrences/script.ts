// Solved

function areOccurrencesEqual(s: string): boolean {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let count = 0;

  for (let charFreq of map.values()) {
    if (count === 0 && charFreq !== 0) count = charFreq;

    if (count !== 0 && charFreq !== count) return false;
  }

  return true;
}

console.log(areOccurrencesEqual("abacbc"));
